//Server
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app=express();
app.use(fileUpload());
//  app.use(express.json());
//  app.use(express.urlencoded({ extended: true }));

//to link appl lavel middleware
import ngoRouter from './router/ngorouter.js';
import rescueRouter from './router/resqrequestrouter.js';
//to read content of bodycontent:load configuration of body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":"true"}));
//to load cross origin module

app.use(cors());
//Application level middleware
app.use("/ngo",ngoRouter);
app.use("/rescue",rescueRouter);


app.listen(3001);
console.log("server invoked at link http://localhost:3001");