const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const Post = require('./models/Post')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())




const uri = process.env.DB_URI
console.log(uri)

mongoose.connect(uri)
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

app.post('/register', async(req, res) => {
  const {userName, email, password} = req.body
  try{
    await User.create({userName, email, password})
    res.json({message: "User created successfully"})
  }catch(err){
    res.json({message: err})
  } 
})
app.post('/post', async(req, res) => {
  const postData = req.body
  try{
    await Post.create(postData)
    res.json({message: "User created successfully"})
  }catch(err){
    res.json({message: err})
  } 
})


// Get method to fetch all the post
app.get('/allpost', async(req, res) => {
  try {
    const data = await Post.find()
    res.json(data)
  } catch (error) {
    console.log(error)
  }  
})

// Get method to fetch spesefic person's the post
app.get('/mypost/:email', async(req, res) => {
  const email = req.params.email
  try {
    const data = await Post.find({email})
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})