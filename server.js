const express = require('express');
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const {getVideoDurationInSeconds} = require("get-video-duration");
const fs = require("fs");

let storage = multer.diskStorage({
    destination:function(_req,_file,callback){
        callback(null, 'Videos/')
    },
    filename: function(_req,file,callback){
        callback(null,file.originalname);
    },
});

const uploads = multer({storage: storage});

const db = require("./database.js");

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyPasper.urlencoded({extended:true}));
app.post("/uploadvideo", uploads.single("videofile"), function(_req, res){})

