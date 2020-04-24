const express = require('express');
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 8080;

// const db = require("./db/models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./build"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/savedBooks", { useNewUrlParser: true });

const testBooks = [
    {
      title: "testbook1", 
      author: "author 1"
    },
    {
      title: "testbook2", 
      author: "author 2"
    },
    {
      title: "testbook3", 
      author: "author 3"
    }
  ]

testBookArchive = []

app.get('/savedbooks', (req,res) => {
  console.log("[SERVER] >>>>> /savedbooks");
  const result = testBooks;
  
  res.json(result)
})

app.post('/savebook', async (req, res) => {
  const data = req.body
  console.log('[SERVER] >>>> save book', data)
  
  const result = await testBookArchive.push(data);
  res.send({status: "saved"})
  console.log("ARCHIVE>>>>", testBookArchive)
})

// app.get('*' (req, res) => { sendFile('/public/index.html')) }

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});