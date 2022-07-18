import express from 'express'
import cors from 'cors';
import get from './rest/get.js'
import getcompany from './rest/getCompany.js'
import postcompany from './rest/postEmployee.js'
import dotenv from 'dotenv'
dotenv.config();
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.get('/',get)
app.get('/company',getcompany)
app.post('/company',postcompany)
app.listen( `${process.env.PORT}`,()=>{
    console.log(`App running on 8081 from listen ${process.env.PORT}`)
})

 