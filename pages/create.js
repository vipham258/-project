/**
 *  @fileOverview create cheese form
 *  @author       Vi Thi Phuong Pham
 */
import React from "react";
import Layout from "../components/MyLayout";
import { useCheeseData } from "../hooks/useCheeseData";
import "normalize.css";
import Link from "next/link";

// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { FormGroup, InputGroup } from "@blueprintjs/core";

//generate custom FormField component
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
  //make the fieldProps become dynamic so we dont need to copy paste code
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
  //handle submit function
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
