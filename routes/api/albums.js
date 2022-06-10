const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/users/login
router.post('/', albumsCtrl.search);
router.post('/add', albumsCtrl.addAlbum);
router.get('/', albumsCtrl.getCollection);
router.delete('/:id', albumsCtrl.deleteAlbum);
router.post('/:id/comments', albumsCtrl.addComment);

module.exports = router;