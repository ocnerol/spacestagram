import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const newChar = e.target.value;
    setSearch(newChar);
  };
  return (
    <TextField
      label="Search into space"
      variant="filled"
      value={search}
      onChange={handleChange}
    />
  );
}
