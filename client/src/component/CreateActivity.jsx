import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCountries, postActivity } from "../redux/action";
import Navbar from "./Navbar";
import S from "./Styles/CreateActivity.module.css";

const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [disable, setDisable] = useState();
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  // funion validadora de los disintos input
  function validate(input) {
    let errors = {};
    let regexName = /^[A-Za-z\s]+$/i;
    if (!input.name.trim()) {
      errors.name = "Se Requiere un Nombre";
    }
    if (!regexName.test(input.name.trim())) {
      errors.name = "The name field only accepts letters";
    }
    if (!input.difficulty) {
      errors.difficulty = "Se requiere una dificultad";
    }
    if (!input.duration.trim()) {
      errors.duration = "Se requiere una duración";
    }
    if (!input.season) {
      errors.season = "se requiere una Estacion";
    }
    if (input.duration < 1 || input.duration > 24) {
      errors.duration = "la duracion debe ser entre 1 a 24 horas";
    }
    if (input.countries.length === 0) {
      errors.countries = "debes eleguir al menos un pais";
    }
    console.log(errors);
    return errors;
  }
  //----------------------------------------------

  // Función que agrega el estado input a name y duration
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.toString(),
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  //---------------------------------------------

  // Función que agrega el estado input a difficulty
  const handleDifficulty = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        difficulty: e.target.value,
      });
      setError(
        validate({
          ...input,
          difficulty: e.target.value,
        })
      );
    }
  };
  //----------------------------------------------

  // Función que agrega al estado input de season
  const handleSeason = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        season: e.target.value,
      });
      setError(
        validate({
          ...input,
          season: e.target.value,
        })
      );
    }
  };
  //----------------------------------------------

  // Función que agrega el estado input de countries
  const handleCountries = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
      setError(
        validate({
          ...input,
          countries: [...input.countries, e.target.value],
        })
      );
    }
  };
  //-----------------------------------------------------

  // funcion despachadora del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(input);
    dispatch(postActivity(input));
    alert("Actividad creada exitosamente");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    navigate("/Home");
  };
  //---------------------------------------

  // esta funcion elimina un pais seleccionado
  const handleDeletCountries = (e, ct) => {
    e.preventDefault();
    const country = input.countries.filter((c) => ct !== c);
    setInput({
      ...input,
      countries: country,
    });
  };
  // ------------------------------------------

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (
      input.name.length > 0 &&
      input.difficulty.length > 0 &&
      input.duration.length > 0 &&
      input.season.length > 0 &&
      input.countries.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    //console.log(error);
  }, [input, setDisable]);

  return (
    <div className={S.container}>
      <div>
        <Navbar />
      </div>
      <div className={S.create}>
        <div className={S.createForm}>
          <h2 className={S.title}>Create Activity</h2>
          <form onSubmit={(e) => handleSubmit(e)} className={S.formulario}>
            <div className={S.divInput}>
              <input
                type="text"
                value={input.name}
                name="name"
                placeholder="Name Activity"
                onChange={handleChange}
                className={S.inputxt}
                autoComplete="off"
              />
              {error.name && <p className={S.alertxt}>{error.name}</p>}
            </div>
            <div className={S.divInput}>
              <select
                name="difficulty"
                className={S.inputxt}
                onChange={(e) => handleDifficulty(e)}
              >
                <option value="" className={S.opciones}>
                  Select Difficulty
                </option>
                <option value="1" className={S.opciones}>
                  Very Easy
                </option>
                <option value="2" className={S.opciones}>
                  Easy
                </option>
                <option value="3" className={S.opciones}>
                  Medium
                </option>
                <option value="4" className={S.opciones}>
                  Hard
                </option>
                <option value="5" className={S.opciones}>
                  Very Hard
                </option>
              </select>
              {error.difficulty && (
                <p className={S.alertxt}>{error.difficulty}</p>
              )}
            </div>
            <div className={S.divInput}>
              <input
                type="number"
                min={"1"}
                max={"24"}
                value={input.duration}
                name="duration"
                placeholder="Duration in hours"
                onChange={handleChange}
                className={S.inputxt}
              />
              {error.duration && <p className={S.alertxt}>{error.duration}</p>}
            </div>
            <div className={S.divInput}>
              <select
                name="season"
                onChange={(e) => handleSeason(e)}
                className={S.inputxt}
              >
                <option value="" className={S.opciones}>
                  Select Season
                </option>
                <option value="all season" className={S.opciones}>
                  All Season
                </option>
                <option value="autumn" className={S.opciones}>
                  Autumn
                </option>
                <option value="spring" className={S.opciones}>
                  Spring
                </option>
                <option value="summer" className={S.opciones}>
                  Summer
                </option>
                <option value="winter" className={S.opciones}>
                  Winter
                </option>
              </select>
              {error.season && <p className={S.alertxt}>{error.season}</p>}
            </div>
            <div className={S.divInput}>
              <select
                name="countries"
                className={S.inputxt}
                onChange={(e) => handleCountries(e)}
              >
                <option value="" className={S.opciones}>
                  Select Countries
                </option>
                {countries.map((c) => {
                  return (
                    <option value={c.name} key={c.id} className={S.opciones}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              {error.countries && (
                <p className={S.alertxt}>{error.countries}</p>
              )}
            </div>
            <div className={S.divImgOr}>
              {countries
                .filter((c) => input.countries.indexOf(c.name) !== -1)
                .map((c) => {
                  return (
                    <div className={S.divImagen}>
                      <div key={c.id} className={S.contImg}>
                        <img src={c.flag} alt={c.name} className={S.img} />
                        <button
                          className={S.btnImg}
                          onClick={(e) => handleDeletCountries(e, c.name)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className={S.contbtn}>
              <button type="submit" disabled={disable} className={S.btn}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateActivity;
