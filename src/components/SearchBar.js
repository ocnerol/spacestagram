import React, { useState } from "react";
import { TextField } from "@mui/material";
import searchNASAImageAPI from "../api/searchNASAImageAPI";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const newChar = e.target.value;
    setSearch(newChar);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await searchNASAImageAPI(search);
    const { items } = data.collection;
    console.log({ items });
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search into space"
        variant="filled"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}
