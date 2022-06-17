import React, { useState } from "react";
import SelectTemplate from "./SelectTemplate";

const MexicoNestedSelects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  
  const TOKEN='d81a7ac7-976d-4e1e-b7d3-b1979d791b6c';

  return (
    <div>
      <h1>Mexico Nested Selects:</h1>
      <SelectTemplate
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && <SelectTemplate title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e) => {setTown(e.target.value);}} />}
      {town && <SelectTemplate title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e) => {setSuburb(e.target.value);}} />}
      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </div>   
  );
};

export default MexicoNestedSelects;
