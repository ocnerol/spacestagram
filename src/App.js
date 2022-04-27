import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import SpiritualizedPlaceholder from "./components/SpiritualizedPlaceholder";

function App() {
  const [displayPlaceholder, setDisplayPlaceholder] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <Header
        setSearchResults={setSearchResults}
        setDisplayPlaceholder={setDisplayPlaceholder}
      />
      {displayPlaceholder ? (
        <SpiritualizedPlaceholder />
      ) : (
        <Feed searchResults={searchResults} />
      )}
      <Footer />
    </div>
  );
}

export default App;
