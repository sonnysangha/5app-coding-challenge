import { Item } from "./interfaces";
import { transformPayload } from "./utils";

describe("transformPayload function", () => {
  let testPayload: Item[];

  beforeEach(() => {
    testPayload = [
      {
        name: "Molly",
        count: 12,
        logos: [
          {
            size: "16x16",
            url: "https://example.com/16x16.png"
          },
          {
            size: "64x64",
            url: "https://example.com/64x64.png"
          }
        ]
      },
      {
        name: "Dolly",
        count: 1,
        logos: [
          {
            size: "128x128",
            url: "https://example.com/128x128.png"
          },
          {
            size: "64x64",
            url: "https://example.com/64x64.png"
          }
        ]
      },
      {
        name: "Polly",
        count: 4,
        logos: [
          {
            size: "16x16",
            url: "https://example.com/16x16.png"
          },
          {
            size: "64x64",
            url: "https://example.com/64x64.png"
          }
        ]
      }
    ];
  });

  it("SHOULD successfully transform as expected (removing items with count > 0 & generate thumbnail from suitable image logos)", () => {
    const transformedPayload = transformPayload(testPayload);
    expect(transformedPayload).toEqual([
      {
        name: "Molly",
        count: 12,
        thumbnail: "https://example.com/64x64.png"
      },
      {
        name: "Polly",
        count: 4,
        thumbnail: "https://example.com/64x64.png"
      }
    ]);
  });
});
