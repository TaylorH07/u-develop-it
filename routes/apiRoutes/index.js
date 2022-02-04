const express = require('express');
const router = express.Router();

//connect to routes in route folder
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;