const express = require('express');
const { generateImage } = require('./openaiController');
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = router;
