import express from 'express';
import type{Request,Response} from 'express'
import 'dotenv/config';

const app=express();

app.use(express.json());//it is middleware to parse JSON into JS objects

app.get('/',(req:Request,res:Response)=>{
    res.send("respose send");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


