import { inspect } from "util";
const { loadCheeseRecords } = require("../../cheese/persistence");

// cheese column

// This is the REST API request handler. It will run on the server and be
// reponsible for interacting with the database and returning the data to the
// client application.
//  - See https://nextjs.org/docs#api-routes
export default async (req, res) => {
  if (req.method === "GET") {
    // read/query
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    let cheeseData = await loadCheeseRecords();
    const { records, header } = cheeseData;
    res.end(JSON.stringify({ records, header }));
  }
  if (req.method === "POST") {
    // create
  } else if (req.method === "PATCH") {
    // update
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    const updatedRecord = JSON.parse(req.body);

    if (USE_MOCK_DATA) {
      const record = cheeseColumns.find(r => r.id === updatedRecord.id);
      Object.assign(record, updatedRecord);
      res.end(JSON.stringify(updatedRecord));
    } else {
      // TODO: access the database using the mysql package
    }
  } else if (req.method === "DELETE") {
    // delete
  }
};
