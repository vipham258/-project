/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/MyLayout";
import { Button } from "@blueprintjs/core";
import { useCheeseData } from "../hooks/useCheeseData";
import CheeseCard from "../components/CheeseCard";
import { sortByProvCode } from "../cheese/sort";

const Index = props => {
  const { cheeseData, deleteRecord } = useCheeseData();
  const [sorted, setSorted] = React.useState(false);
  const sortedCheeseRecords = React.useMemo(() => {
    if (sorted) return sortByProvCode(cheeseData.records);
    else return cheeseData.records;
  }, [cheeseData.records, sorted]);

  const handleClickDelete = cheeseId => {
    deleteRecord(cheeseId);
  };
  const handleClickSort = () => {
    setSorted(!sorted);
  };

  return (
    <Layout>
      <div>
        <Button icon="sort" onClick={handleClickSort}>
          {sorted ? "Sort by Id" : "Sort by Province Code"}
        </Button>
      </div>
      <h2 style={{ textAlign: "center", color: "GreenYellow" }}>Cheese Data</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sortedCheeseRecords.map(record => {
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
