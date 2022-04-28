import fetchOriginalImageURI from "../api/fetchOriginalImageURI";

export default async function formatSearchResults(results) {
  // for each result
  // get original image by making GET request on result.href and taking first
  // in result.data, get:
  // title, date_created
  // return { imageURI, title, date_created }

  const formattedResults = await Promise.all(
    results.map(async (result) => {
      try {
        const originalImageURI = await fetchOriginalImageURI(result.href);
        // if image is in unsupported image file format, skip this result
        if (originalImageURI.endsWith(".tif")) return;

        const [itemMetadata] = result.data;
        const { date_created, title } = itemMetadata;
        // get YYYY-MM-DD from date_created
        const dateCreated = date_created.slice(0, 10);

        return {
          dateCreated,
          originalImageURI,
          title,
        };
      } catch (error) {
        console.log("error formatting results:", error);
      }
    })
  );

  // filter out results with unsupported file formats that were skipped and left undefined in array
  return formattedResults.filter((item) => item);
}
