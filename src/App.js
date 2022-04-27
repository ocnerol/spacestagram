import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
