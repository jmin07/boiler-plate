const userService = require('./userService')

require("dotenv").config();
/**
 * API No.1
 * API Name: 회원가입
 */

exports.postUserSignUp = async (req, res)=>{
    const { email, name, password } = req.body;

    console.log(email, name, password)
    console.log(process.env.dbHost);
    const signupResponse = await userService.createUser(email, name, password);

    
    // // res.redirect('/');
    // return res.send(response(signupResponse));
}
