import express from 'express';
import cors from 'cors'
import confi from './config/env.js';

const app=express();

app.use(cors({
    origin:config.clientUrl,
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/health',(req,res)=>{
    res.status(200).json({
        status:healthy,
        timestamp:new Date()
    });
});

export default app;