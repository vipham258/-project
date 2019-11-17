import { inspect } from "util";

const {
  loadCheeseRecords,
  saveCheeseRecords
} = require("../../cheese/persistence");

// cheese column

// This is the REST API request handler. It will run on the server and be
// reponsible for interacting with the database and returning the data to the
// client application.
//  - See https://nextjs.org/docs#api-routes
export default async (req, res) => {
  if (req.method === "GET") {
    // load
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    let cheeseData = await loadCheeseRecords();
    const { records, header } = cheeseData;
    res.end(JSON.stringify({ records, header }));
  }
  if (req.method === "POST") {
    // save
    const { records, header } = JSON.parse(req.body);
    console.log(`save received data: `, inspect({ records, header }));
    try {
      await saveCheeseRecords({ records, header });
      res.statusCode = 200;
      res.end();
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.end();
    }
  }
};
