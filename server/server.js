const express = require('express')
const cors = require('cors')
const path = require("path")
const exp = require('constants')

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

const port = process.env.PORT || 4006;

app.listen(port, () =>{
    console.log(`Up on port ${port}`);
})