import React, { useState } from "react";
import Layout from "../components/MyLayout";
import { useCheeseData } from "../hooks/useCheeseData";
import "normalize.css";
import Link from "next/link";

// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { FormGroup, InputGroup } from "@blueprintjs/core";
const FormField = props => {
  return (
    <div>
      <FormGroup label={props.label} style={{ width: "500px" }}>
        <InputGroup
          placeholder={props.placeholder}
          type="text"
          value={props.value}
          onChange={props.onChange}
        ></InputGroup>
      </FormGroup>
    </div>
  );
};

const CreateForm = () => {
  const { cheeseData, createRecord } = useCheeseData();
  const [state, setState] = React.useState({});

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

  React.useEffect(() => {
    console.log("state: ", state);
    console.log("fieldPropsList: ", fieldPropsList);
  }, [fieldPropsList, state]);

  const handleSubmit = () => {
    const cheeseRecord = { ...state };
    fieldPropsList.forEach(fieldProps => {
      cheeseRecord[fieldProps.label] = fieldProps.value;
    });
    createRecord(cheeseRecord);
  };
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
          <Link href="/">
            <input type="button" value="Create" onClick={handleSubmit} />
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default CreateForm;

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
