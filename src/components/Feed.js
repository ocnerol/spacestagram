import { ImageList } from "@mui/material";
import React from "react";
import SpaceImage from "./SpaceImage";

export default function Feed({ searchResults }) {
  const feedItems = searchResults.map((item, index) => (
    <SpaceImage
      key={index}
      photoURI={item.originalImageURI}
      title={item.title}
      dateCreated={item.dateCreated}
    />
  ));
  return (
    <ImageList variant="standard" cols={3} gap={8}>
      {feedItems}
    </ImageList>
  );
}
