const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/users/login
router.post('/', albumsCtrl.search);

module.exports = router;