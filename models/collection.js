const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    collection: {type: Array}
},{
   timestamps: true 
});

module.exports = mongoose.model('Collection', collectionSchema);