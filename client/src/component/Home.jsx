import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  orderByName,
  orderByPopulation,
} from "../redux/action";
import Card from "./Card";
import Filter from "./Filter";
import OrderByName from "./OrderByName";
import OrderByPopulation from "./OrderByPopulation";

import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import S from "./Styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const initialPage = useSelector((state) => state.initialPage);
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const maxNumPages = Math.ceil(countries.length / perPage);
  const indexOfStart = (page - 1) * perPage;
  const indexOfEnd = (page - 1) * perPage + perPage;
  const currentCountries = countries.slice(indexOfStart, indexOfEnd);
  console.log(currentCountries);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  const handleOrderPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    setPage(1);
  };

  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    setPage(1);
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Reset
        </button>
        <div>
          {/* <OrderByPopulation /> */}
          <select onChange={handleOrderPopulation}>
            <option value="rnd">All countries</option>
            <option value="asc">Asendente</option>
            <option value="desc">Desendente</option>
          </select>
        </div>
        <div>
          {/* <OrderByName /> */}
          <select onChange={handleOrderName}>
            <option value="rnd">All countries</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div>
          <Filter setpage={setPage} />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className={S.container}>
        {currentCountries.length > 0 ? (
          currentCountries?.map((c) => {
            return (
              <Card
                key={c.id}
                name={c.name}
                flag={c.flag}
                id={c.id}
                continent={c.continent}
              />
            );
          })
        ) : (
          <div>Cargando</div>
        )}
      </div>
      <div>
        <Paginated page={page} setPage={setPage} maxNumPages={maxNumPages} />
      </div>
    </div>
  );
}
