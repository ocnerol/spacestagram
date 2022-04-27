import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <Header setSearchResults={setSearchResults} />
      <Feed searchResults={searchResults} />
    </div>
  );
}

export default App;
