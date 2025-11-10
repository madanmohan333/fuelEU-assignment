import express from 'express';
import type{Request,Response} from 'express'


const app=express();

app.use(express.json());//it is middleware to parse JSON into JS objects

app.get('/',(req:Request,res:Response)=>{
    res.send("respose send");
})
app.listen("3000",()=>{
    console.log("server running on port 3000");
})

