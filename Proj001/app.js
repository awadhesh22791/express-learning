const express=require('express');
const app=express();

app.get('/',(req,res)=>res.send('Hello world!'));

app.put('/',function(req,res){
    res.send("Put request");
});

app.post('/',function(req,res){
    res.send("Post request.");
});

app.delete('/',function(req,res){
    res.send("Delete requrest.");
});

app.listen(3000,()=>console.log('Example app listen on port 3000!'));