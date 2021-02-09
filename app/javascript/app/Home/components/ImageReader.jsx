import React, { memo, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { func } from "prop-types";
import styled from "styled-components";
import { Flex } from "rebass";

const Wrapper = styled(Flex)`
  cursor: pointer;
  color: ${(props) => (props.highlight ? "palevioletred" : "black")};
  background: #efefef;
  width: 200px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const FileInput = styled.input`
  display: none;
`;

const propTypes = {
  onFilesRead: func.isRequired,
};

const ImageReader = ({ onFilesRead }) => {
  const { addToast, removeAllToasts } = useToasts();
  const fileInputRef = useRef();
  const [highlight, setHighlight] = useState(false);

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const readFile = (files) => {
    let imageSrcList = [];
    const imageFiles = Object.values(files);
    imageFiles.forEach((file, index) => {
      const fileReader = new window.FileReader();
      // Check if the file is an image.
      if (file.type && file.type.indexOf("image") === -1) {
        console.log("File is not an image.", file.type, file);
        return;
      }

      fileReader.onload = ({ target: { result } }) => {
        imageSrcList.push(result);
        if (imageFiles.length === index + 1) {
          onFilesRead(imageSrcList);
          removeAllToasts();
          addToast("Uploaded Successfully", { appearance: "success", autoDismiss: true });
        }
      };

      fileReader.readAsDataURL(file);
    });
  };

  const onDrop = (event) => {
    event.preventDefault();
    readFile(event.dataTransfer.files);
    setHighlight(false);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setHighlight(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setHighlight(false);
  };

  const handleFileChosen = (event) => {
    event.preventDefault();
    readFile(event.target.files);
  };

  return (
    <Wrapper
      highlight={highlight}
      onClick={openFileDialog}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <p>Drop Images here</p>
      <FileInput
        ref={fileInputRef}
        multiple
        type="file"
        id="img"
        accept="image/*"
        onChange={handleFileChosen}
      />
    </Wrapper>
  );
};

FileReader.propTypes = propTypes;

export default memo(ImageReader);
