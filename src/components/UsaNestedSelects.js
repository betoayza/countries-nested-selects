import React, { useState } from "react";
import SelectTemplate from "./SelectTemplate";

const UsaNestedSelects = () => {
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  
  return (
    <div>
      <h1>USA Nested Selects:</h1>
      <SelectTemplate
        title="continent"
        url=""
        handleChange={(e) => {
          setContinent(e.target.value);
        }}
      />
      {country && <SelectTemplate title="country" url="" handleChange={(e) => {setCountry(e.target.value);}} />}
      {city && <SelectTemplate title="city" url="" handleChange={(e) => {setCity(e.target.value);}} />}
      <pre>
        <code>
          {continent}-{country}-{city}
        </code>
      </pre>
    </div>   
  );
};

export default UsaNestedSelects;
