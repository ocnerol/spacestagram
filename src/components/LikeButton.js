import { useState } from "react";
import { IconButton } from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import Palette from "./Palette";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Palette>
      <IconButton onClick={handleClick}>
        {liked ? (
          <FavoriteIcon color="darkerPurple" />
        ) : (
          <FavoriteBorderIcon color="darkerPurple" />
        )}
      </IconButton>
    </Palette>
  );
}
