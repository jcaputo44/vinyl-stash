const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    cover_image: {type: String},
    title: {type: String},
    artist: {type: String},
    year: {type: String},
    label: {type: String},
    genre: {type: String},
},{
   timestamps: true 
});

module.exports = mongoose.model('Album', albumSchema);