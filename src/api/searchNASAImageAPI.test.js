import searchNASAImageAPI from "./searchNASAImageAPI";
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

  it("search results have image collection link", async () => {
    const mockResultItem = {
      href: "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/collection.json",
    };

    const mockResult = {
      data: {
        collection: {
          items: [mockResultItem],
        },
      },
    };
    const mockResultImageLink = mockResult.data.collection.items[0].href;

    axios.get.mockResolvedValue(mockResult);

    const result = await searchNASAImageAPI("moon");
    const resultImageLink = result.data.collection.items[0].href;

    expect(resultImageLink).toEqual(mockResultImageLink);
  });
});
