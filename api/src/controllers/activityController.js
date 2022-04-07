const { Activity, Country, Op } = require("../db");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // aqui crear arreglo de paises
    //hacer map ---> agegar a arreglo de paises (arreglo de objetos) --> agregar a addCountries el arreglo de paises

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await newActivity.addCountries(await Country.findByPk(countries));
    res.status(200).json(newActivity);
  } catch (error) {
    console.log("error en la funcion postActivity", error);
  }
};
module.exports = {
  postActivity,
};
