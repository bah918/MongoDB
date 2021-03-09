const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/garage", {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("BD connecté");
});

const  schemaCars = new mongoose.Schema({
     brand:String,
     model: String,
     year:Number,
     created:Date
});
//mon model 
const modelCars = mongoose.model("cars", schemaCars);
/*modelCars.deleteMany({})
.then(()=>{});
modelCars.create([{
    brand : "Renault",
    model :"Espace",
    year : 1999,
    created: 1995
},
{
    brand: "Renault",
    model:"Scenic",
    year:2004,
    created :2004

},
{
    brand : "Renault",
    model :"Scenic",
    year:2004,
    created:2017
},
]);*/
modelCars.find().then((response)=>console.log(response));