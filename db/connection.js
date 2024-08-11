import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const main = async ()=>{
    mongoose.connect("mongodb+srv://Ecommers:Ytp4PMNnVZiQWU82@cluster0.kioi2eo.mongodb.net/?retryWrites=true&w=majority" ,({
        useNewUrlParser:true,
        useUnifiedTopology:true
    }))
}
main().then(()=>{
    console.log("DB connection successfull......" , 5000)
})
.catch((e)=>{});
