import React from "react";

import AppTitle from "../AppTitle";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header({ setSearchInput, setSearchResults }) {
  return (
    <header className="main">
      <AppTitle />
      <SearchBar
        setSearchInput={setSearchInput}
        setSearchResults={setSearchResults}
      />
    </header>
  );
}
