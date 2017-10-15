var express= require('express');
var app=express();
var emsController=require('./ems-Controllers/emsControllers');

var bodyParser = require('body-parser');
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

emsController(app);
app.use('/ems',express.static(__dirname+'/public'))
app.use(express.static(__dirname))

app.listen('3000',function(){
    console.log('Server @3000')
})