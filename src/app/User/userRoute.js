// 파일 자체를 함수로 작성

module.exports = (app) =>{
    const user = require('./userController');
    console.log('test')
    
    app.get('/', user.Test);
}