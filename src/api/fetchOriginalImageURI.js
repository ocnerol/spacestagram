import axios from "axios";

export default async function fetchOriginalImageURI(collectionURI) {
  try {
    const { data } = await axios.get(collectionURI);
    const originalURI = data[0];
    return originalURI;
  } catch (error) {
    console.log("error fetching original image URI:", error);
  }
}
