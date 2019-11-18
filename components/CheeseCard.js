/**
 *  @fileOverview This is a cheeseCard component holding information for each cheese record
 * Using blueprint library for css
 *  @author       Vi Thi Phuong Pham
 */

//import blueprint components
import { Button, Card, Elevation } from "@blueprintjs/core";
//import Link from next js
import Link from "next/link";
const CheeseCard = props => {
  const { cheeseRecord, onClickDelete } = props;
  const header = Object.keys(cheeseRecord);
  return (
    //make a card with custom style
    <Card
      interactive={true}
      elevation={Elevation.TWO}
      style={{
        maxWidth: "300px",
        width: "300px",
        marginRight: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {/*
        Create the card component with heading and content. map the cheeseRecord 
      */}
      <div>
        <h5 style={{ textAlign: "center", color: "GreenYellow" }}>
          Cheese ID: {cheeseRecord.CheeseId}
        </h5>
        {Object.values(cheeseRecord)
          .slice(1)
          .map((columnValue, i) => {
            const columnName = header[i + 1];
            return (
              <p key={columnName}>
                <strong style={{ color: "LightGreen" }}>{columnName}</strong>:{" "}
                {columnValue}
              </p>
            );
          })}
      </div>
      <div style={{ textAlign: "right" }}>
        {/*
        Edit button redirect to edit page with the id of cheeseRecord
      */}
        <Link href={"/edit?id=" + cheeseRecord.CheeseId}>
          <Button icon="edit" style={{ marginRight: "8px" }}>
            Edit
          </Button>
        </Link>
        {/*
        Delete button call onClickDelete method 
      */}
        <Button
          icon="delete"
          onClick={() => onClickDelete(cheeseRecord.CheeseId)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};
//export CheeseCard
export default CheeseCard;
