import React from "react";
import { useDispatch } from "react-redux";
import { orderByPopulation, setOrder, setPage } from "../redux/action";

const OrderByPopulation = () => {
  const dispatch = useDispatch();

  const handleOrderPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    dispatch(setPage(1));
    dispatch(setOrder(`Ordenado ${e.target.value}`));
  };
  return (
    <select onChange={handleOrderPopulation}>
      <option value="asc">Asendente</option>
      <option value="desc">Desendente</option>
    </select>
  );
};

export default OrderByPopulation;
