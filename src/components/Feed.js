import React from "react";
import SpaceImage from "./SpaceImage";

export default function Feed({ searchResults }) {
  const feedItems = searchResults.map((item, index) => (
    <SpaceImage
      key={index}
      description={item.description}
      photoURI={item.photoURI}
      title={item.title}
      dateCreated={item.dateCreated}
    />
  ));
  return;
}
