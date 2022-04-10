import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCountries, postActivity } from "../redux/action";
import Navbar from "./Navbar";

const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDifficulty = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        difficulty: e.target.value,
      });
    }
  };

  const handleSeason = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        season: e.target.value,
      });
    }
  };

  const handleCountries = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
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
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h2>Activity Create</h2>
      <form action="">
        <div>
          <label>Name Activity</label>
          <input
            type="text"
            value={input.name}
            name="name"
            placeholder="Name..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Difficulty</label>
          <select name="difficulty">
            <option value="">Select Difficulty</option>
            <option value="1">Very Easy</option>
            <option value="2">Easy</option>
            <option value="3">Medium</option>
            <option value="4">Hard</option>
            <option value="5">Very Hard</option>
          </select>
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            placeholder="Duration..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Season</label>
          <select name="season">
            <option value="">Select Season</option>
            <option value="winter">Winter</option>
            <option value="autumn">Autumn</option>
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
            <option value="all season">All Season</option>
          </select>
        </div>
        <div>
          <label>Countries</label>
          <select name="countries" onChange={handleCountries}>
            <option value="">Select Countries</option>
            {countries.map((c) => {
              return (
                <option value={c.name} key={c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <ul>
            <li>{input.countries.map((c) => c + " ,")}</li>
          </ul>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
