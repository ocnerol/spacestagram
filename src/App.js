import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header/Header";
import SpiritualizedPlaceholder from "./components/SpiritualizedPlaceholder";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <Header
        setSearchResults={setSearchResults}
        setSearchInput={setSearchInput}
      />
      {searchInput === "" ? (
        <SpiritualizedPlaceholder />
      ) : (
        <Feed searchResults={searchResults} />
      )}
    </div>
  );
}

export default App;
