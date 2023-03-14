const express = require('express');
const cors = require('cors');


const app = express();
port = 3080;



app.use(cors());


app.get("/Livres",(req,res) => {
  res.json([{
    "movie" : "Avatar",
    "actor" : "Saldana",
    "realisator" : "James Cameron"},
    {
      "movie" : "Joker",
      "actor" : "Bidule",
      "realisator" : "Truc"},

    ]

  );
});


app.listen(port, ()=>{
  console.log("Server is running on port 3080");
});