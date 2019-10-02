import * as functions from "firebase-functions";
import { transformPayload } from "./utils";

// Service URL:
// https://us-central1-fiveappcodechallenge.cloudfunctions.net/fiveappwebservicechallenge
export const fiveappwebservicechallenge = functions.https.onRequest(
  (request, response) => {
    let {
      body: { payload }
    } = request;

    try {
      // filter for response items with count greater than 1.
      payload = transformPayload(payload);

      response.status(200).send({ response: payload });
    } catch (e) {
      response.status(500).send(e);
    }
  }
);
