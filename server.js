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
