import fetchOriginalImageURI from "../api/fetchOriginalImageURI";

export default async function formatSearchResults(results) {
  // for each result
  // get original image by making GET request on result.href and taking first
  // in result.data, get:
  // title, date_created
  // return { imageURI, title, date_created }

  const formattedResults = await Promise.all(
    results.map(async (result) => {
      const originalImageURI = await fetchOriginalImageURI(result.href);
      // if image is in unsupported image file format, skip this result
      if (originalImageURI.endsWith(".tif")) return;

      const [itemMetadata] = result.data;
      const { date_created: dateCreated, title } = itemMetadata;

      return {
        dateCreated,
        originalImageURI,
        title,
      };
    })
  );

  // filter out results with unsupported file formats that were skipped and left undefined in array
  return formattedResults.filter((item) => item);
}
