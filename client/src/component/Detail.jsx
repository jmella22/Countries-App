import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNameById } from "../redux/action";
import Navbar from "./Navbar";

const Detail = () => {
  const dispatch = useDispatch();
  const detailCountry = useSelector((state) => state.detailCountry);
  const params = useParams();

  useEffect(() => {
    dispatch(getNameById(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div key={detailCountry.id}>
        <h2>{detailCountry.name}</h2>
        <div>
          <img
            src={detailCountry.flag}
            alt={`Bandera de ${detailCountry.name}`}
          />
        </div>
        <p>{detailCountry.capital}</p>
        <p>{detailCountry.continent}</p>
        <p>{detailCountry.subregion}</p>
        <p>{detailCountry.area}</p>
        <p>{detailCountry.population}</p>
        {detailCountry.activities ? (
          detailCountry.activities.map((c) => {
            return (
              <div>
                <p>{c.name}</p>
                <p>{c.difficulty}</p>
                <p>{c.duration}</p>
                <p>{c.season}</p>
              </div>
            );
          })
        ) : (
          <h4>No hay actividades</h4>
        )}
      </div>
    </div>
  );
};

export default Detail;
