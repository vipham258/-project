/**
 *  @fileOverview Main page of the project, content all the cheese cards with edit and delete function
 *  @author       Vi Thi Phuong Pham
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/MyLayout";
import { Button } from "@blueprintjs/core";
import { useCheeseData } from "../hooks/useCheeseData";
import CheeseCard from "../components/CheeseCard";
import { sortByProvCode } from "../cheese/sort";
//generate Index
const Index = props => {
  const { cheeseData, deleteRecord } = useCheeseData();
  const [sorted, setSorted] = React.useState(false);
  //using useMemo so react doesnt need to render the information again.
  const sortedCheeseRecords = React.useMemo(() => {
    if (sorted) return sortByProvCode(cheeseData.records);
    else return cheeseData.records;
  }, [cheeseData.records, sorted]);
  //handle delete button
  const handleClickDelete = cheeseId => {
    deleteRecord(cheeseId);
  };
  //handle sort
  const handleClickSort = () => {
    setSorted(!sorted);
  };

  return (
    <Layout>
      <div>
        {/*
        sort button, if true then sort by province code, else sort by id
      */}
        <Button icon="sort" onClick={handleClickSort}>
          {sorted ? "Sort by Id" : "Sort by Province Code"}
        </Button>
      </div>
      <h2 style={{ textAlign: "center", color: "GreenYellow" }}>Cheese Data</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sortedCheeseRecords.map(record => {
          return (
            //render Cheese card
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
