const { Activity, Country, Op } = require("../db");

const postActivity = async (req, res) => {
  try {
    console.log(req.body);
    const { name, difficulty, duration, season, countries } = req.body;

    // aqui crear arreglo de paises
    //hacer map de countries---> agegar a arreglo de paises (arreglo de objetos) --> agregar a addCountries el arreglo de paises
    const foundCountries = await Country.findAll({
      where: {
        name: countries,
      },
    });

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await newActivity.addCountries(foundCountries);
    res.status(200).json(newActivity);
  } catch (error) {
    console.log("error en la funcion postActivity", error);
  }
};

const getAllActivity = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: ["countries"],
    });
    res.status(200).json(activities);
  } catch (error) {
    console.log("error en la funcion getAllActivity", error);
  }
};

module.exports = {
  postActivity,
  getAllActivity,
};
