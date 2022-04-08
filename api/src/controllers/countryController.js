const { Activity, Country, Op } = require("../db");

const getAllCountries = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const country = await Country.findAll({
        attributes: [
          "id",
          "name",
          "flag",
          "continent",
          "capital",
          "population",
        ],
        include: Activity,
        through: {
          attributes: [],
        },
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      if (country.length === 0) {
        res.status(404).send("not found name");
      } else {
        res.status(200).json(country);
      }
    } else {
      const countries = await Country.findAll({
        include: ["activities"],
      });
      res.status(200).json(countries);
    }
  } catch (error) {
    console.log("error en la funcion getAllCountries", error);
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const countryId = await Country.findOne({
      attributes: [
        "id",
        "name",
        "flag",
        "continent",
        "capital",
        "subregion",
        "area",
        "population",
      ],
      include: Activity,
      through: {
        attributes: [],
      },
      where: {
        id: {
          [Op.iLike]: `%${id}%`,
        },
      },
    });
    res.status(200).json(countryId);
  } catch (error) {
    console.log("error en la funcion getCountryById", error);
  }
};

module.exports = {
  getAllCountries,
  getCountryById,
};
