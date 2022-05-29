require("dotenv").config();

const userDao = require("./userDao");
const { pool } = require("../../../config/database");

// 회원 가입
exports.createUser = async function (email, name, password) {
    try {
        console.log(email, name, password)

        // // 아이디 중복 확인
        // const userEmail = await userProvider.IdCheck([email]);
        // console.log(userEmail);
        
        // if (userEmail.length >= 1 ) return errResponse(SIGNUP_EMAIL_ERROR)
        
        // 데이터베이스 추가
        const connection = await pool.getConnection(async (conn) => conn);
        const userIdResult = await userDao.updateUser(connection, [name, email, password]);
        connection.release();

        return response(responseStatus.SUCCESS, userIdResult);

    } catch (err) {
        console.log(err);
    }
}