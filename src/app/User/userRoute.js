// 파일 자체를 함수로 작성


module.exports = (app) =>{
    const user = require('./userController'); 

    // 1. 회원가입
    app.post('/signup', user.postUserSignUp);
}