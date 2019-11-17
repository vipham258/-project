import React from "react";
import fetch from "isomorphic-unfetch";

const CheeseDataContext = React.createContext();

export const CheeseAPI = {
  async fetchCheeseData() {
    const res = await fetch("/api/cheeses");
    const data = await res.json();
    console.log(`Features data returned from server`, data);
    return data;
  },
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

export const CheeseDataProvider = ({ children }) => {
  const [cheeseData, setCheeseData] = React.useState({
    header: [],
    records: []
  });

  React.useEffect(() => {
    async function fetchData() {
      const data = await CheeseAPI.fetchCheeseData();
      setCheeseData(data);
    }
    fetchData();
  }, []);

  return (
    <CheeseDataContext.Provider value={{ cheeseData, setCheeseData }}>
      {children}
    </CheeseDataContext.Provider>
  );
};

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
