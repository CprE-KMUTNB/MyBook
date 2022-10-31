const express = require("express")
const compression = require("compression")
const path = require("path")

const app = express()

app.use(compression())
app.use(express.static(path.join(__dirname,"build")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"))
})

app.listen(process.env.PORT || 8080, function(){
    console.log("start server", this.address().port, app.settings.env);
});