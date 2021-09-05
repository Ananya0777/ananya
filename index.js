const express = require("express");
const app =  express();


app.get("/",function(req,res){
    res.send('Anna here');
    
});






app.listen(3000);