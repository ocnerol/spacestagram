import { ImageListItem } from "@mui/material";
import React from "react";

export default function SpaceImage({ photoURI, title, dateCreated }) {
  return (
    <ImageListItem>
      <img src={photoURI} alt={title} />
    </ImageListItem>
  );
}
