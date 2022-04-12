import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../redux/action";
import S from "./Styles/Searchbar.module.css";

const SearchBar = ({ page, setPage, input, setInput }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    setPage(1);
    setInput(1);
    setName("");
  };

  return (
    <div>
      <input
        className={S.inputSerach}
        value={name}
        type="text"
        placeholder="Search to country"
        onChange={(e) => handleInputChange(e)}
      />
      <button className={S.btnN} type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
