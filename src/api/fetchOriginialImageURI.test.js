import fetchOriginalImageURI from "./fetchOriginalImageURI";
import axios from "axios";

jest.mock("axios");

const actualCollectionURL =
  "https://images-assets.nasa.gov/image/PIA12235/collection.json";

describe("NASA Image and Video Library API search method", () => {
  it("returns a string", async () => {
    const mockResult = "example string";

    axios.get.mockResolvedValue(mockResult);

    const result = await fetchOriginalImageURI(actualCollectionURL);
    expect(result).toEqual(mockResult);
  });
});
