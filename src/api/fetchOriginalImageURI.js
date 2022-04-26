import axios from "axios";

export default async function fetchOriginalImageURI(collectionURI) {
  const { data } = await axios.get(collectionURI);
  const originalURI = data[0];
  return originalURI;
}
