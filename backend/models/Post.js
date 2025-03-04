const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const Post = model('Post', postSchema)
module.exports = Post