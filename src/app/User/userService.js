require("dotenv").config();

const userDao = require("./userDao");
const { pool } = require("../../../config/database");

// 회원 가입
exports.createUser = async function (email, name, password) {
    try {


        // 데이터베이스 추가
        const connection = await pool.getConnection(async (conn) => conn);
        const userIdResult = await userDao.updateUser(connection, [name, email, password]);
        connection.release();

        return response(responseStatus.SUCCESS, userIdResult);

    } catch (err) {
        console.log(err);
    }
}