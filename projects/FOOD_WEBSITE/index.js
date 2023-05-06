const express = require("express")
const app = express()
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    res.send("")
})

app.listen(8080, () =>{
    console.log("listening on port 3000")
})