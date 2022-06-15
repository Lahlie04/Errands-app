const express = require("express");
const addressRouter = require('./routes/address');
const requestRouter = require('./routes/request');
const reviewRouter = require('./routes/review');
const servicesRouter = require('./routes/services');
const userRouter = require('./routes/user');
const bodyParser = require("body-parser") 
const cors = require('cors');

const app = express();
const port = 4304;

var corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("We-run is working")
});

app.use("/api/",addressRouter);
app.use("/api/",requestRouter);
app.use("/api/",reviewRouter);
app.use("/api/",servicesRouter);
app.use("/api/",userRouter);

app.listen(port,() => {
    console.log(`server is listening to port ${port}`);
});