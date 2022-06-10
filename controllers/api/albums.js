
const fetch = require("node-fetch");
const Album = require('../../models/album');

module.exports = {
    search,
    addAlbum,
    getCollection,
    deleteAlbum,
    addComment
}

async function addComment(req, res) {
    const album = await Album.findById(req.params.id);
    req.body.user = req.user._id;
    album.comments.push(req.body);
    await album.save();
    res.json(album);
}

async function deleteAlbum(req, res) {
    const remove = await Album.findByIdAndDelete(req.params.id);
    res.json(remove);
}

async function getCollection(req, res) {
    const albums = await Album.find({user:req.user._id}).sort("-createdAt");
    res.json(albums);
}

async function search(req, res) {
    const albums = await fetch(`https://api.discogs.com/database/search?q=${req.body.query}&type=release&key=${process.env.API_KEY}&secret=${process.env.API_SECRET}`).then((res) => res.json());
    res.json(albums.results);
}

async function addAlbum(req,res) {
    const album = await Album.findOne({API_ID:req.body.API_ID});
    if (album) {
        let albumUser = album.user.includes(req.user._id);
        if (albumUser) return
        album.user.push(req.user._id);
        await album.save();
        res.json(album);
    } else {
        req.body.user = req.user._id;
        const newAlbum = new Album(req.body);
        await newAlbum.save();
        res.json(newAlbum);
    }
}