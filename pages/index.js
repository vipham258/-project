/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/MyLayout";

import { useCheeseData } from "../hooks/useCheeseData";
import CheeseCard from "../components/CheeseCard";

const Index = props => {
  const { cheeseData, deleteRecord } = useCheeseData();

  const handleClickDelete = cheeseId => {
    deleteRecord(cheeseId);
  };

  return (
    <Layout>
      <h1>Project by Vi Pham 040886894</h1>
      <h2 style={{ textAlign: "center" }}>Cheese</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cheeseData.records.map(record => {
          return (
            <CheeseCard
              key={record.CheeseId}
              cheeseRecord={record}
              onClickDelete={handleClickDelete}
            ></CheeseCard>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
