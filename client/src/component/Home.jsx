import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getAllCountries,
  orderByName,
  orderByPopulation,
} from "../redux/action";
import Card from "./Card";

import SearchBar from "./SearchBar";
import S from "./Styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [order, setOrder] = useState("");
  const [input, setInput] = useState(1);
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
    setInput(1);
  };

  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    setPage(1);
    setInput(1);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    setPage(1);
    setInput(1);
  };

  const nextPage = () => {
    if (parseInt(page) < maxNumPages) {
      setInput(parseInt(page) + 1);
      setPage(parseInt(page) + 1);
    }
  };

  const prevPage = () => {
    if (parseInt(page) > 1) {
      setInput(parseInt(page) - 1);
      setPage(parseInt(page) - 1);
    }
  };

  const onKeyDOwn = (e) => {
    if (e.keyCode == 13) {
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > maxNumPages ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
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
          {/* <Filter/> */}
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
        {/* <Paginated page={page} setPage={setPage} maxNumPages={maxNumPages} /> */}
        <button onClick={prevPage}>-</button>
        <input
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDOwn(e)}
          value={input}
          type="text"
          autoComplete="off"
        />
        <p>de {maxNumPages}</p>
        <button onClick={nextPage}>+</button>
      </div>
    </div>
  );
}
