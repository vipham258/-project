/**
 *  @fileOverview useCheeseData uses api REST, POST + JSON web-service to fetch data from local to web browser
 *  @author       Vi Thi Phuong Pham
 */

import React from "react";
import fetch from "isomorphic-unfetch";

const CheeseDataContext = React.createContext();
//fetch data from server
export const CheeseAPI = {
  async fetchCheeseData() {
    const res = await fetch("/api/cheeses");
    const data = await res.json();
    console.log(`Features data returned from server`, data);
    return data;
  },
  //post data
  async postCheeseData(cheeseData) {
    console.log(
      `I think I am posting this cheeseData to the api: `,
      cheeseData
    );
    const res = await fetch("/api/cheeses", {
      method: "POST",
      body: JSON.stringify(cheeseData)
    });
    console.log(`Save response status ${res.status}: `, res.text);
  }
};
//cheeseDataprovider will hold cheese Records
export const CheeseDataProvider = ({ children }) => {
  const [cheeseData, setCheeseData] = React.useState({
    header: [],
    records: []
  });
  //testing
  React.useEffect(() => {
    async function fetchData() {
      const data = await CheeseAPI.fetchCheeseData();
      setCheeseData(data);
    }
    fetchData();
  }, []);
  //return CheeseDataContext
  return (
    <CheeseDataContext.Provider value={{ cheeseData, setCheeseData }}>
      {children}
    </CheeseDataContext.Provider>
  );
};
//export cheeseData
export const useCheeseData = () => {
  const { cheeseData, setCheeseData } = React.useContext(CheeseDataContext);

  const loadCheeseData = async () => {
    const data = await CheeseAPI.fetchCheeseData();
    setCheeseData(data);
  };

  return {
    cheeseData,
    loadCheeseData,

    async saveCheeseData() {
      await CheeseAPI.postCheeseData(cheeseData);
    },

    //create record and push it to records array
    createRecord(record) {
      setCheeseData(cheeseData => {
        return { ...cheeseData, records: cheeseData.records.concat(record) };
      });
    },

    //select the specific record from the array using cheeseID
    selectRecord(cheeseId) {
      return cheeseData.records.find(record => record.CheeseId === cheeseId);
    },

    //update the specific record from the array using cheeseID
    updateRecord(cheeseId, record) {
      setCheeseData(cheeseData => {
        const newRecords = [...cheeseData.records];
        const index = cheeseData.records.findIndex(
          record => record.CheeseId === cheeseId
        );
        if (index !== -1) {
          newRecords[index] = record;
        }
        return { ...cheeseData, records: newRecords };
      });
    },
    //delete the specific record from the array using cheeseID
    deleteRecord(cheeseId) {
      setCheeseData(cheeseData => {
        const newRecords = cheeseData.records.filter(
          record => record.CheeseId !== cheeseId
        );
        return { ...cheeseData, records: newRecords };
      });
    }
  };
};
