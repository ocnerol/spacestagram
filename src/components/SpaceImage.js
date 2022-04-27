import { ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import LikeButton from "./LikeButton";

export default function SpaceImage({ photoURI, title, dateCreated }) {
  return (
    <ImageListItem>
      <img src={photoURI} alt={title} />
      <ImageListItemBar
        position="bottom"
        title={title}
        subtitle={dateCreated}
        actionIcon={<LikeButton />}
      />
    </ImageListItem>
  );
}
