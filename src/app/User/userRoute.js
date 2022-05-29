// 파일 자체를 함수로 작성
require("dotenv").config();

module.exports = (app) =>{
    const user = require('./userController');

    console.log('test')
    
    // 1. 회원가입
    app.post('/signup', user.postUserSignUp);
}