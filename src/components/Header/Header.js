import React from "react";

import AppTitle from "../AppTitle";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header({ setSearchResults }) {
  return (
    <div className="header">
      <AppTitle />
      <SearchBar setSearchResults={setSearchResults} />
    </div>
  );
}
