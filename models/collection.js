const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    collection: {type: Array}
},{
   timestamps: true 
});

module.exports = mongoose.model('Collection', collectionSchema);