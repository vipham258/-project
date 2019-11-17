import React from "react";
import Layout from "../components/MyLayout";
import { useCheeseData } from "../hooks/useCheeseData";
import "normalize.css";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { id } = router.query;

  const { cheeseData, selectRecord, updateRecord } = useCheeseData();
  const [state, setState] = React.useState(selectRecord(id));

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
    updateRecord(id, cheeseRecord);
  };
  return (
    <Layout>
      <div>
        <form>
          <h2 style={{ color: "GreenYellow" }}>Edit Cheese record</h2>
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
            <input type="button" value="Update" onClick={handleSubmit} />
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default CreateForm;
