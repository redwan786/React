import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mdjakariamahmud68:mahmud@cluster0.yvnxwxd.mongodb.net/quickbites').then(()=>console.log("DataBase Connected"));
}


/*
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mdjakariamahmud68:mahmud@cluster0.yvnxwxd.mongodb.net/quickbites');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
*/




/*
import mongoose from "mongoose";

const connectDB = async () =>{
    try{
          const conn=await mongoose.connect(process.env.MONGO_URL)
          console.log(`connectdb ${conn.connection.host}`)
    }catch(error){
        console.log(`error in mongobd ${error}`)
    }

}

export default connectDB;
*/
//

//
//const { default: mongoose } = require('mongoose');
/*
const app = require('express')();
const http = require('http').Server(app);

//mongoose.connect("");

http.listen(4000,function(){
    console.log('connected db');
});*/
/*
import mongoose from "mongoose";
import connectDB from './db';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mdjakaria:jakaria@76@cluster0.afukczj.mongodb.net/quickbites', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>console.log("DB Connected"));
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};
*/