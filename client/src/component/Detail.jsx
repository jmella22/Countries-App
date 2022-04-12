import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNameById } from "../redux/action";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Page404 from "./Page404";
import S from "./Styles/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const detailCountry = useSelector((state) => state.detailCountry);
  console.log(!detailCountry);
  const params = useParams();
  const [load, setLoad] = useState(false);

  const valueDif = (n) => {
    if (n === 1) {
      return "Very Easy";
    }
    if (n === 2) {
      return "Easy";
    }
    if (n === 3) {
      return "Medium";
    }
    if (n === 4) {
      return "Hard";
    }
    if (n === 5) {
      return "Very Hard";
    }
  };

  useEffect(() => {
    dispatch(getNameById(params.id)).then(setLoad(true));
  }, [dispatch, params.id]);
  if (load) {
    if (!detailCountry) {
      return (
        <div>
          <Page404 />
        </div>
      );
    } else {
      return (
        <div className={S.container}>
          <div>
            <Navbar />
          </div>
          <div key={detailCountry.id}>
            <div className={S.contTitle}>
              <h2 className={S.title}>{detailCountry.name}</h2>
            </div>
            <div className={S.contInfo}>
              <div className={S.contImg}>
                <img
                  className={S.img}
                  src={detailCountry.flag}
                  alt={`Bandera de ${detailCountry.name}`}
                />
              </div>
              <div className={S.info}>
                <p
                  className={S.data}
                >{`The Continent is: ${detailCountry.continent}`}</p>
                <p
                  className={S.data}
                >{`The Subregion is: ${detailCountry.subregion}`}</p>
                <p
                  className={S.data}
                >{`The Capital is: ${detailCountry.capital}`}</p>
                <p
                  className={S.data}
                >{`The total area is: ${detailCountry.area} square kilometer`}</p>
                <p
                  className={S.data}
                >{`The total population is:${detailCountry.population}`}</p>
              </div>
            </div>
            <div className={S.contActi}>
              <div className={S.contTitle}>
                <h2 className={S.title}>Activities:</h2>
              </div>
              <div className={S.contCard}>
                {detailCountry.activities &&
                detailCountry.activities.length > 0 ? (
                  detailCountry.activities.map((c) => {
                    return (
                      <div className={S.actiCard}>
                        <p className={S.acti}>{`Name: ${c.name}`}</p>
                        <p className={S.acti}>{`The difficulty is: ${valueDif(
                          parseInt(c.difficulty)
                        )}`}</p>
                        <p
                          className={S.acti}
                        >{`The average duration is: ${c.duration} hours`}</p>
                        <p
                          className={S.acti}
                        >{`The best season is: ${c.season}`}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className={S.actiCard}>
                    <p className={S.acti}>
                      This country has no registered activities for now
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className={S.container}>
        <Loader />
      </div>
    );
  }
};

export default Detail;
