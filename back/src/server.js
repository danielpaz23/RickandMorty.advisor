const http = require('http');
const app= require("./app");
// const express= require('express');
// const router = require('./routes');
// const app= express();
// const morgan = require('morgan');
// const cors = require('cors');


// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
// app.use('/rickandmorty', router)
// const {getCharById}= require('./controllers/getCharById');
// const {getCharDetail}= require('./controllers/getCharDetail');

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     let id =req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }

//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }


// })
app.listen(3001,()=>{
    console.log('Server raised in port')
});