import React, { memo } from "react";
import { Box, Image, Text } from "rebass";

const ImageCard = ({ imageObj, index, onDelete }) => {
  const handleDelete = () => onDelete(index);

  return (
    <Box {...styles.wrapper}>
      <Text {...styles.crossIcon} onClick={handleDelete}>
        &#x274C;
      </Text>
      <Image width="100%" src={imageObj} />
    </Box>
  );
};

const styles = {
  wrapper: {
    my: 2,
    width: [1, 1, 1 / 2, 1 / 4],
    sx: {
      position: "relative",
      backgroundColor: "black",
      border: "5px solid transparent",
      ":hover": {
        border: "5px solid red",
      },
    },
  },
  crossIcon: {
    sx: {
      position: "absolute",
      top: "-16px",
      right: "-11px",
      fontSize: "14px",
      zIndex: 1,
      background: "white",
      borderRadius: 100,
      height: 30,
      width: 30,
      p: "6px",
      textAlign: "center",
      border: "1px solid",
      cursor: "pointer",
    },
  },
};

export default memo(ImageCard);
