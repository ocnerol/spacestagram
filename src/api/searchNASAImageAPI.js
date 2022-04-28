import axios from "axios";

// queries NASA Image and Video Library API (nasaIVLAPI) with specified query string
const searchNASAImageAPI = async (query) => {
  try {
    return await axios.get(
      `https://images-api.nasa.gov/search?q=${query}&media_type=image`
    );
  } catch (error) {
    console.log("error querying NASA API:", error);
  }
};

export default searchNASAImageAPI;
