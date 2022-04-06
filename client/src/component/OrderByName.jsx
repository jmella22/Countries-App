import React from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../redux/action";

const OrderByName = () => {
  const dispatch = useDispatch();

  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };
  return (
    <select onChange={handleOrderName}>
      <option value="asc">A - Z</option>
      <option value="desc">Z - A</option>
    </select>
  );
};

export default OrderByName;
