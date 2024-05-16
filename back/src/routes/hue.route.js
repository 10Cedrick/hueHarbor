const express = require('express');
const hueController = require('../controllers/hueController')
const router = express.Router();

router.get('/', hueController.findAll);

module.exports = router;