import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  console.log({ searchResults });
  return (
    <div className="App">
      <SearchBar setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
