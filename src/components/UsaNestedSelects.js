import React, { useState } from "react";
import SelectTemplate from "./SelectTemplate";

const UsaNestedSelects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  
  return (
    <div>
      <h1>USA Nested Selects:</h1>
      <SelectTemplate
        title="estado"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {town && <SelectTemplate title="municipios" url="" handleChange={(e) => {setTown(e.target.value);}} />}
      {suburb && <SelectTemplate title="city" url="" handleChange={(e) => {setSuburb(e.target.value);}} />}
      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </div>   
  );
};

export default UsaNestedSelects;
