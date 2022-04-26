import axios from "axios";

// NASA Image and Video Library API (nasaIVLAPI)
const nasaIVLAPI = axios.create({
  baseURL: "https://images-api.nasa.gov",
});
