import { useState } from "react";
import { IconButton } from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((prev) => !prev);
  };

  return (
    <IconButton onClick={handleClick}>
      {liked ? (
        <FavoriteIcon color="error" />
      ) : (
        <FavoriteBorderIcon color="error" />
      )}
    </IconButton>
  );
}
