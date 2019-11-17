/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/MyLayout";
import Link from "next/link";
import { useCheeseData } from "../hooks/useCheeseData";
import { Button, Card, Elevation } from "@blueprintjs/core";
import CheeseCard from "../components/CheeseCard";

const Index = props => {
  const { cheeseData, loadCheeseData, saveCheeseData } = useCheeseData();

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
            ></CheeseCard>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
