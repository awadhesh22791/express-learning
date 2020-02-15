var express=require("express");
var router=express.Router();
var mongoose=require("mongoose");

mongoose.connect('mongodb://localhost/test01');

var country=mongoose.Schema({
    name:String,
    short_name:String,
    mobile_code:String
});

var Country=mongoose.model("Country",country);

router.get("/",function(req,res){
    Country.find(function(error,response){
        if(error){
            res.json({message:"Server error"});
        }else{
            var countries=[];
            response.forEach(country => {
                countries.push({
                    id:country.id,
                    name:country.name,
                    short_name:country.short_name,
                    mobile_code:country.mobile_code
                });
            });
            res.json({message:"Data Found",data:countries});
        }
    });
});

router.get('/:id',function(req,res){
    res.send("The id you specified is "+req.params.id+".");
});

router.post("/create",function(req,res){
    var countryInfo=req.body;
    if(!countryInfo.name || !countryInfo.short_name || !countryInfo.mobile_code){
        res.send("Missing mandatory fields.");
    }else{
        var newCountry=new Country({
            name:countryInfo.name,
            short_name:countryInfo.short_name,
            mobile_code:countryInfo.mobile_code
        });
        newCountry.save(function(error,Person){
            if(error){
                res.send({message:'database error',data:error});
            }else{
                res.send({message:'Data saved.'});
            }
        });
    }
});

module.exports=router;