import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/action";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.coutries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <>
      <h1>ESTAMOS VIVOS</h1>
    </>
  );
}
