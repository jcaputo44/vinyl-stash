
const fetch = require("node-fetch");
const Album = require('../../models/album');

module.exports = {
    search,
    addAlbum,
    getCollection
}

async function getCollection(req, res) {
    const albums = await Album.find({user:req.user._id})
    res.json(albums)
}

async function search(req, res) {
    const albums = await fetch(`https://api.discogs.com/database/search?q=${req.body.query}&type=release&key=${process.env.API_KEY}&secret=${process.env.API_SECRET}`).then((res) => res.json());
    res.json(albums.results);
}

async function addAlbum(req,res) {
    const album = await Album.findOne({API_ID:req.body.API_ID})
    console.log(album)
    if (album) {
        let albumUser = album.user.includes(req.user._id)
        if (albumUser) return
        album.user.push(req.user._id)
        await album.save()
        res.json(album)
    } else {
        req.body.user = req.user._id
        const newAlbum = new Album(req.body)
        await newAlbum.save()
        res.json(newAlbum)
    }
}