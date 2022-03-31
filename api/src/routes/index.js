const { Router } = require('express');
const { getAllCountries, getCountryById } = require('../controllers/countryController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryById );


module.exports = router;
