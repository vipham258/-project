import React from "react";
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

export default FormField;
