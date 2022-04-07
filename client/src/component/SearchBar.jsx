import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Enviar
      </button>
    </div>
  );
};

export default SearchBar;
