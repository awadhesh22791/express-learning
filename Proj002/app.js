var express=require('express');
var app=express();
var countryRouter=require('./country.js');
var bodyparser=require('body-parser');
//var multer=require('multer');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//app.use(multer.array());

app.use(function(req,res,next){
    console.log("["+req.method+"] Calling URL: "+req.path);
    next();
});
app.use('/country',countryRouter);

app.get('*',function(req,res){
    res.send("Back to business.");
});

app.listen(3000,()=>console.log('Example app listen on port 3000!'));