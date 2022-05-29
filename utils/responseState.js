module.exports = {
    // Success(1000)
    SUCCESS : {"isSuccess": true,"code":1000, "message":"성공"},

    // SignUp Error(2000)
    SIGNUP_PASSWORD_ERROR : {"isSuccess":false, "code": 2000, "message":"패스워드 오류입니다."} ,
    SIGNUP_EMAIL_ERROR : {"isSuccess":false, "code": 2100, "message":"이메일 오류입니다."},

    // SignIn Error(3000)
    SIGNIN_PASSWORD_ERROR : {"isSuccess":false, "code": 3000, "message":"패스워드 오류입니다."} ,
    SIGNIN_EMAIL_ERROR : {"isSuccess":false, "code": 3100, "message":"이메일 오류입니다."},
    SIGNIN_STATUS_ERROR : {"isSuccess":false, "code": 3200, "message":"계정 정지 상태입니다."},

    // JWT Error(4000)
    TOKEN_EMPTY : {"isSuccess":false, "code":4000, "message":"토큰이 없습니다."},
    TOKEN_VERIFICATION_FAILURE : {"isSuccess":false, "code":41000, "message":"토큰 검증 오류입니다."},
}