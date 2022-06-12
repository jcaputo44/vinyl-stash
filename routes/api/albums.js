const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/users/login
router.post('/', ensureLoggedIn, albumsCtrl.search);
router.post('/add', ensureLoggedIn, albumsCtrl.addAlbum);
router.get('/', ensureLoggedIn, albumsCtrl.getCollection);
router.delete('/:id', ensureLoggedIn, albumsCtrl.deleteAlbum);
router.post('/:id/comments', ensureLoggedIn, albumsCtrl.addComment);

module.exports = router;