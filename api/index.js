//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require("axios");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    try {
      const allCountriesAPI = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      allCountriesAPI.data.map(async (e) => {
        await Country.findOrCreate({
          where: {
            id: e.cca3,
            name: e.name.common,
            flag: e.flags.svg,
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : "not found capital",
            subregion: e.subregion || "not found subregion",
            area: e.area.toString(),
            population: e.population.toString(),
          },
        });
      });
      console.log("data base complet loaded");
    } catch (error) {
      console.log("Error al cargar la base de datos", error);
    }
  });
});
