const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection Successful"))
    .catch((err)=> {
        console.log("Issue in DB connection");
        console.error(err.message);
        process.exit(1);
    });
}
module.exports=dbConnect;