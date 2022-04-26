import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import searchNASAImageAPI from "../../api/searchNASAImageAPI";
import "./SearchBar.css";
import formatSearchResults from "../../helpers/formatSearchResults";

export default function SearchBar({ setSearchResults }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const newChar = e.target.value;
    setSearch(newChar);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await searchNASAImageAPI(search);
    const { items } = data.collection;
    const formattedResults = await formatSearchResults(items);
    setSearchResults(formattedResults);
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <TextField
        label="Search into space"
        variant="filled"
        value={search}
        onChange={handleChange}
      />
      <IconButton variant="contained" onClick={handleSubmit}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </form>
  );
}
