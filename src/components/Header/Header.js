import React from "react";

import AppTitle from "../AppTitle";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header({
  setDisplayPlaceholder,
  setLoading,
  setSearchResults,
}) {
  return (
    <header className="main">
      <AppTitle />
      <SearchBar
        setDisplayPlaceholder={setDisplayPlaceholder}
        setLoading={setLoading}
        setSearchResults={setSearchResults}
      />
    </header>
  );
}
