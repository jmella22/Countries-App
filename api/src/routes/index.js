const { Router } = require("express");
const { postActivity } = require("../controllers/activityController");
const {
  getAllCountries,
  getCountryById,
} = require("../controllers/countryController");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryById);
router.post("/activity", postActivity);

module.exports = router;
