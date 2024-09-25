import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// YOU CAN SAVE UR DATABASE IN THIS COMMENT IF U WANT --> 



/*
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"

import morgan from 'morgan';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';



dotenv.config();

connectDB();

const app = express();

app.use(express.json())
app.use(morgan('dev'))

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


*/

//



/*
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"


//app config
const app= express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db connection 
connectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//

//mongodb+srv://mdjakaria:jakaria@76@cluster0.afukczj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/