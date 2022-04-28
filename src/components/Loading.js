import { LinearProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div id="loading-bar">
      <LinearProgress color="secondary" />
    </div>
  );
}
