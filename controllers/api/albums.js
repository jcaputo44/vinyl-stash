
const fetch = require("node-fetch");

module.exports = {
    search
}

async function search(req, res) {
    console.log('nirvana rocks');
    const albums = await fetch(`https://api.discogs.com/database/search?q=${req.query}&key=${process.env.API_KEY}&secret=${process.env.API_SECRET}`).then((res) => res.json());
    res.json(albums.results);
}