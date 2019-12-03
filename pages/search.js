import React from "react";

import Layout from "../components/MyLayout";
import FormField from "../components/FormField";
import CheeseCard from "../components/CheeseCard";
import { useCheeseData } from "../hooks/useCheeseData";

import { Button } from "@blueprintjs/core";

import searchRecords from "../cheese/search";

const SearchForm = () => {
  const { cheeseData } = useCheeseData();
  const [state, setState] = React.useState({});
  const [searchResults, setSearchResults] = React.useState([]);

  const fieldPropsList = cheeseData.header.map(columnName => {
    return {
      label: columnName,
      value: state[columnName] || "",
      onChange: event =>
        setState(state => {
          return {
            ...state,
            [columnName]: event.target.value
          };
        })
    };
  });

  const handleClickSearch = () => {
    const searchTerms = { ...state };
    fieldPropsList.forEach(fieldProps => {
      searchTerms[fieldProps.label] = fieldProps.value.trim();
    });

    const results = searchRecords(cheeseData.records, searchTerms);
    console.log("search results:", results);
    setSearchResults(results);
  };

  const noInput = Object.values(state).every(value => value.trim() === "");

  return (
    <Layout>
      <div>
        <form>
          <h2 style={{ color: "GreenYellow" }}>Create Cheese record</h2>
          <div>
            {fieldPropsList.map(fieldProps => {
              return (
                <FormField
                  label={fieldProps.label}
                  key={fieldProps.label}
                  value={fieldProps.value}
                  onChange={fieldProps.onChange}
                ></FormField>
              );
            })}
          </div>

          <Button
            text="Search"
            onClick={handleClickSearch}
            disabled={noInput}
          />
        </form>
      </div>
      <div>
        <h2 style={{ color: "GreenYellow" }}>Search Results</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {searchResults.slice(0, 200).map(record => {
            return <CheeseCard key={record.CheeseId} cheeseRecord={record} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SearchForm;

//0 CheeseId,
//1 CheeseNameEn,
//2 CheeseNameFr,
//3 ManufacturerNameEn,
//4 ManufacturerNameFr,
//5 ManufacturerProvCode,
//6 ManufacturingTypeEn,
//7 ManufacturingTypeFr,
//8 WebSiteEn,
//9 WebSiteFr,
//10 FatContentPercent,
//11 MoisturePercent,
//12 ParticularitiesEn,
//13 ParticularitiesFr,
//14 FlavourEn,
//15 FlavourFr,
//16 CharacteristicsEn,
//17 CharacteristicsFr,
//18 RipeningEn,
//19 RipeningFr,
//20 Organic,
//21 CategoryTypeEn,
//22 CategoryTypeFr,
//23 MilkTypeEn,
//24 MilkTypeFr,
//25 MilkTreatmentTypeEn,
//26 MilkTreatmentTypeFr,
//27 RindTypeEn,
//28 RindTypeFr,
//29 LastUpdateDate
