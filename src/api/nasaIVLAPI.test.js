import searchNASAImageAPI from "./nasaIVLAPI";
import axios from "axios";

jest.mock("axios");

describe("NASA Image and Video Library API search method", () => {
  it("returns an object with a single 'collection' property", async () => {
    const mockResult = {
      data: {
        collection: {},
      },
    };

    axios.get.mockResolvedValue(mockResult);

    const result = await searchNASAImageAPI("space");
    expect(result.data).toEqual(mockResult.data);
  });
});
