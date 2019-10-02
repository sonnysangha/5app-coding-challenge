import { Item, Logo } from "./interfaces";

export const transformPayload = (payload: Item[]) => {
  // filter for response items with count greater than 1.
  payload = payload.filter((item: Item) => item.count > 1);

  // get URL for thumbnail from payload item's list of logos no larger than 128x128 but no smaller than 64x64.
  payload.forEach((item: Item) => {
    item.logos.forEach((logo: Logo) => {
      const [width, height] = logo.size.split("x").map(char => parseInt(char));
      if (width >= 64 && width <= 128 && (height >= 64 && height <= 128)) {
        // set thumbnail if we find a logo which matches our dimensions
        item.thumbnail = logo.url;
      }
    });
    delete item.logos;
  });

  return payload;
};
