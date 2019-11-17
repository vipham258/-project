import React from "react";
import { HTMLTable } from "@blueprintjs/core";

const CheeseTable = props => {
  // This data can be hardcoded for testing or fetched from the server
  const [data, setData] = React.useState({ records: [], header: [] });

  const fetchCheeseData = async () => {
    // make a fetch request
    const res = await fetch("/api/cheeses");
    const data = await res.json();
    console.log(`Features data returned from server`, data);
    setData(data);
  };

  // Fetch data when component mounts
  React.useEffect(() => {
    fetchCheeseData();
  }, []);

  return (
    <HTMLTable bordered striped condensed>
      <thead>
        <tr>
          {data.header.map(columnName => {
            return <td key={columnName}>{columnName}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.records.map(record => {
          return (
            <tr>
              {Object.values(record).map(columnValue => {
                return <td key={columnValue}>{columnValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </HTMLTable>
  );
};

export default CheeseTable;
