const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.json({message: 'Hello api! 🌈🌈'});
});


router.use('/hue', require('./hue.route'));

module.exports = router;