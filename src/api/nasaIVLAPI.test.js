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

  it("items array property in collection object has 100 items when searching for 'moon'", async () => {
    const oneHundredItems = new Array(100);
    const mockResult = {
      data: {
        collection: {
          items: oneHundredItems,
        },
      },
    };

    axios.get.mockResolvedValue(mockResult);

    const result = await searchNASAImageAPI("moon");
    expect(result.data.collection.items.length).toEqual(
      mockResult.data.collection.items.length
    );
  });
});
