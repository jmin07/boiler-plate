## Node.js Template
여러 사용자들의 템플릿을 결합하여 재구성 했습니다.  

## 3 Layer Architecture
비즈니스 로직을 분리하는 것을 목적으로 하며 Controller, Service Layer , Data Access Layer 라는 세개의 층으로 나뉜다.  

- controller는 client와의 통신에서 필요한 req, res를 다루는 부분  
- service layer은 business logic 처리
- Data Access Layer 는 데이터 베이스 처리

## Structure
개인에 따라 구성을 변경하여 사용할 수 있습니다.  

```
├── config                              # middleware 및 config 파일
├── src                     			
│   ├── app              				# 앱에 대한 코드 
│   │   ├── Board            			# Board 폴더
│   │   ├── User            			# User 폴더
서버 로직 처리
│   │ 	│   ├── userRoute.js 		    # Route 처리
│   │ 	│   ├── userController.js 		# req, res 처리
│   │ 	│   ├── userService.js   		# CUD에 해당하는 서버 로직 처리   
데이터베이스
│   │ 	│   ├── userDao.js          	# UserDatabase
├── .gitignore                     		# git 에 포함되지 않아야 하는 폴더, 파일들을 작성 해놓는 곳
└── index.js                            # 포트 설정 및 
```
