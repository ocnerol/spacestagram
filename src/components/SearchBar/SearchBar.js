import React, { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import searchNASAImageAPI from "../../api/searchNASAImageAPI";
import "./SearchBar.css";
import formatSearchResults from "../../helpers/formatSearchResults";

export default function SearchBar({
  setDisplayPlaceholder,
  setLoading,
  setSearchResults,
}) {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const newChar = e.target.value;
    setSearch(newChar);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (search === "") {
      setDisplayPlaceholder(true);
      setSearchResults([]);
    } else {
      setDisplayPlaceholder(false);
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (!submit) return;

    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await searchNASAImageAPI(search);
        const { items } = data.collection;
        const formattedResults = await formatSearchResults(items);
        setSearchResults(formattedResults);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
      setSubmit(false);
    };

    fetch();
  }, [submit]);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <TextField
        color="grey"
        label="Search into space"
        variant="outlined"
        value={search}
        onChange={handleChange}
      />
      <IconButton variant="contained" onClick={handleSubmit}>
        <SearchIcon fontSize="large" />
        <p className="screen-reader-only">Search</p>
      </IconButton>
    </form>
  );
}
