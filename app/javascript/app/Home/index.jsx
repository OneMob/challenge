import React, { useState, useCallback } from "react";
import { Box, Flex, Text } from "rebass";
import { ImageReader, ImageCard } from "./components";

export default function Home() {
  const [images, setImages] = useState([]);
  const handleDelete = useCallback(
    (index) => {
      const updatedImage = [...images];
      updatedImage.splice(index, 1, null);
      setImages(updatedImage);
    },
    [images]
  );
  const handleImageUpload = useCallback(
    (imageSrcList) => setImages([...images, ...imageSrcList]),
    [images]
  );

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize={4} fontWeight="bold" my={3}>
        Image Viewer
      </Text>
      <Flex>
        <ImageReader onFilesRead={handleImageUpload} />
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        {images.map(
          (imageObj, index) =>
            imageObj && (
              <ImageCard
                key={index}
                imageObj={imageObj}
                index={index}
                onDelete={handleDelete}
              />
            )
        )}
      </Flex>
    </Flex>
  );
}
