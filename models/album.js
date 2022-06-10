const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String},
    user: {type: Schema.Types.ObjectId, ref: "User"}
})

const albumSchema = new Schema({
    cover_image: {type: String},
    title: {type: String},
    artist: {type: String},
    year: {type: String},
    label: [{type: String}],
    genre: [{type: String}],
    API_ID: {type:String},
    user: [{type: Schema.Types.ObjectId, ref: "User"}],
    comments: [commentSchema]
},{
   timestamps: true 
});

module.exports = mongoose.model('Album', albumSchema);