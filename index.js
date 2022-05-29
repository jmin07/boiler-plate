const express = require('./config/express');
const app = express();


app.listen(5000, ()=>{
    try{
        console.log("listening 중입니다...")
    } catch(err){
        console.log(err);
    }
})