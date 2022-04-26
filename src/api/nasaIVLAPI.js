import axios from "axios";

// queries NASA Image and Video Library API (nasaIVLAPI) with specified query string
const searchNASAImageAPI = async (query) =>
  await axios.get(`https://images-api.nasa.gov/search?q=${query}`);

export default searchNASAImageAPI;
