import React from "react";
import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar/SearchBar";

export default function Header({ setSearchResults }) {
  return (
    <div>
      <AppTitle />
      <SearchBar setSearchResults={setSearchResults} />
    </div>
  );
}
