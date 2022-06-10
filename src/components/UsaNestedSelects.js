import React, {useState} from "react";
import SelectTemplate from "./SelectTemplate";

const UsaNestedSelects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [colony, setColony] = useState("");
  
  return (
    <div>
      <h1>USA Nested Selects:</h1>
      <SelectTemplate
        title="State"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && <SelectTemplate title="town" url="" handleChange={(e) => {setTown(e.target.value);}} />}
      {town && <SelectTemplate title="colony" url="" handleChange={(e) => {setColony(e.target.value);}} />}
      <pre>
        <code>
          {state}-{town}-{colony}
        </code>
      </pre>
    </div>   
  );
};

export default UsaNestedSelects;
