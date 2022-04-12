import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getAllCountries,
  orderByName,
  orderByPopulation,
  resetDetail,
} from "../redux/action";
import Card from "./Card";
import Loader from "./Loader";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import S from "./Styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  const [filter, setFilter] = useState("");
  const [sortP, setSortP] = useState("");
  const [sortN, setSortN] = useState("");
  const [order, setOrder] = useState("");
  const [input, setInput] = useState(1);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [perPage, setPerPage] = useState(9);
  const maxNumPages = Math.ceil(countries.length / perPage);
  const indexOfStart = (page - 1) * perPage;
  const indexOfEnd = (page - 1) * perPage + perPage;
  const currentCountries = countries.slice(indexOfStart, indexOfEnd);
  //console.log(currentCountries);

  // Botón resest
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
    setPage(1);
    setInput(1);
    setFilter("");
    setSortN("");
  };
  //-----------------------------

  // Ordern por poblacion
  const handleOrderPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setSortP(e.target.value);
    setOrder(`Ordenado ${e.target.value}`);
    setPage(1);
    setInput(1);
    setFilter("");
    setSortN("");
  };
  //----------------------------------------------

  // sort por nombre
  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setSortN(e.target.value);
    setOrder(`Ordenado ${e.target.value}`);
    setPage(1);
    setInput(1);
    setFilter("");
    setSortP("");
  };
  //---------------------------------------------

  // filtro por continente
  const handleSelect = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    dispatch(filterByContinent(e.target.value));
    setPage(1);
    setInput(1);
    setSortN("");
    setSortP("");
  };
  //--------------------------------------------

  // paginacion
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

  const onChange = (e) => {
    setInput(e.target.value);
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
  //------------------------------------------------

  useEffect(() => {
    dispatch(getAllCountries()).then(setLoad(true));
    dispatch(resetDetail());
  }, [dispatch]);
  if (load) {
    return (
      <div className={S.bg}>
        <div>
          <Navbar />
        </div>
        <div className={S.contSort}>
          <div>
            <select
              onChange={handleOrderPopulation}
              className={S.inputxt}
              value={sortP}
            >
              <option value="rnd" className={S.opciones}>
                Sort Population
              </option>
              <option value="asc" className={S.opciones}>
                Asendente
              </option>
              <option value="desc" className={S.opciones}>
                Desendente
              </option>
            </select>
          </div>
          <div>
            <select
              onChange={handleOrderName}
              className={S.inputxt}
              value={sortN}
            >
              <option value="rnd" className={S.opciones}>
                Sort Alphabetical
              </option>
              <option value="asc" className={S.opciones}>
                A - Z
              </option>
              <option value="desc" className={S.opciones}>
                Z - A
              </option>
            </select>
          </div>
          <div>
            <select
              onChange={(e) => handleSelect(e)}
              className={S.inputxt}
              value={filter}
            >
              <option value={"All"} className={S.opciones}>
                All Continents
              </option>
              <option value={"Africa"} className={S.opciones}>
                Africa
              </option>
              <option value={"Antarctica"} className={S.opciones}>
                Antarctica
              </option>
              <option value={"Asia"} className={S.opciones}>
                Asia
              </option>
              <option value={"Europe"} className={S.opciones}>
                Europe
              </option>
              <option value={"North America"} className={S.opciones}>
                North America
              </option>
              <option value={"Oceania"} className={S.opciones}>
                Oceania
              </option>
              <option value={"South America"} className={S.opciones}>
                South America
              </option>
            </select>
          </div>

          <button
            className={S.btnR}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Reset
          </button>
        </div>
        <div className={S.contSearch}>
          <SearchBar
            page={page}
            setPage={setPage}
            input={input}
            setInput={setInput}
          />
        </div>

        <div className={S.containerCard}>
          {currentCountries && currentCountries.length > 0 ? (
            currentCountries.map((c) => {
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
            <div className={S.actiCard}>
              <p className={S.acti}>Countries are being loaded, please wait</p>
            </div>
          )}
        </div>
        <div className={S.contPag}>
          <button onClick={prevPage} className={S.btnP}>
            Prev
          </button>
          <input
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onKeyDOwn(e)}
            value={input}
            type="text"
            autoComplete="off"
            className={S.inputPag}
          />
          <div className={S.txtPag}>
            <p>de {maxNumPages}</p>
          </div>
          <button onClick={nextPage} className={S.btnN}>
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={S.bg}>
        <Loader />
      </div>
    );
  }
}
