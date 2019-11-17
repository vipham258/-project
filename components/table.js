import React from "react";
import { HTMLTable } from "@blueprintjs/core";

const CheeseTable = props => {
  const { cheeseData } = props;

  return (
    <HTMLTable bordered striped condensed>
      <thead>
        <tr>
          {cheeseData.header.map(columnName => {
            return <td key={columnName}>{columnName}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {cheeseData.records.map(record => {
          return (
            <tr key={record.CheeseId}>
              {Object.values(record).map((columnValue, i) => {
                return <td key={cheeseData.header[i]}>{columnValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </HTMLTable>
  );
};

export default CheeseTable;
