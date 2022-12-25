const linkData = require('../data/saved_links.json')
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var cors = require('cors')

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  })

app.get("/links", (req, res) => {
    res.json(linkData.links);
  });
  
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});