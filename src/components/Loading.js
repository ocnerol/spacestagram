import { LinearProgress } from "@mui/material";
import React from "react";
import Palette from "./Palette";

export default function Loading() {
  return (
    <Palette>
      <div id="loading-bar">
        <LinearProgress color="darkestPurple" />
        <LinearProgress color="darkerPurple" />
        <LinearProgress color="midPurple" />
        <LinearProgress color="lighterPurple" />
        <LinearProgress color="lightestPurple" />
      </div>
    </Palette>
  );
}
