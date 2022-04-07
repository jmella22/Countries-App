import React from "react";
import { useDispatch } from "react-redux";
import { filterByContinent } from "../redux/action";

const Filter = ({ setPage }) => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    //setPage(1);
  };
  return (
    <div>
      <select onChange={handleSelect}>
        <option value={"All"}>all</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Antarctica"}>Antarctica</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"North America"}>North America</option>
        <option value={"Oceania"}>Oceania</option>
        <option value={"South America"}>South America</option>
      </select>
    </div>
  );
};

export default Filter;
