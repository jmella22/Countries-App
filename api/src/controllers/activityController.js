const { Activity, Country, Op } = require('../db');

const postActivity = async (req, res) =>{
    try{
        const {name, difficulty, duration, season, countries} = req.body;
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
    }catch(error){
        console.log('error en la funcion postActivity', error);
    }
};