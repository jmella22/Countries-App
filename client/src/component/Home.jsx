import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/action";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.coutries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <>
      <div>
        <p>AQUI VA EL MENU</p>
      </div>
      <div>
        {allCountries?.map((c) => {
          return (
            <Card
              name={c.name}
              flag={c.flag}
              id={c.id}
              countinent={c.countinent}
            />
          );
        })}
      </div>
    </>
  );
}
