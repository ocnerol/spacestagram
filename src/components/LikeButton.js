import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LikeButton() {
  return (
    <IconButton>
      <FavoriteBorderIcon color="error" />
    </IconButton>
  );
}
