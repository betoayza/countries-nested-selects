import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";

const SelectTemplate = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  //if (!data) return null; //avoid innecesary renders

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Select a {title}</option>
        {data && }
      </select>
    </>
  );
};

export default SelectTemplate;
