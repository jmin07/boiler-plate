// 회원 아이디 가져오기
exports.selectUserId = async function (connection, email) {
    const selectUserIdQuery = `
        SELECT email
        FROM MyfarmsUser
        WHERE email = ?;`;
    // 배열로 return
    const [returnID] = await connection.query(selectUserIdQuery, email);
  
    return returnID;
}

// 회원 정보 추가
exports.updateUser = async function (connection, userInfo){
    const updateUserQuery = `
        INSERT INTO MyfarmsUser(name, email, password)
        VALUES ( ?, ?, ?);`;

    const [returnUserInfo] = await connection.query(updateUserQuery, userInfo);

    return returnUserInfo;
}