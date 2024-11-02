## 바로가기

#### 1. [타입스크립트 설치](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#1-타입스크립트-설치-1)
#### 2. [개발환경 편하게 쓰기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#2-개발환경-편하게-쓰기-1)
#### 3. [타입 패키지 설치하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#3-타입-패키지-설치하기-1)
#### 4. [Express 핸들러 타입 사용하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#4-Express-핸들러-타입-사용하기-1)
#### 5. [패키지의 타입 커스텀하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#5-패키지-타입-커스텀하기-1)
#### 6. [ORM에서 타입 사용하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file##6-ORM에서-타입-사용하기-1)

---

# 1. 타입스크립트 설치

### 1) 프로젝트 세팅

#### 프로젝트 시작
```
npm init
```

#### Express설치
```
npm i express
```

#### package.json 파일에 추가
```
  "type": "module" // ES6을 사용 목적
  "main": "app.js", // 실행 파일 설정
  "scripts": { // 명령어 변경
    "start": "node app.js",
  }  
```

#### 서버 실행
```
npm start
```

#### Request 보내서 테스트하는 방법
1. REST Client Extension 설치
2. test.http 파일 만들기
3. 서버를 실행
4. GET http://localhost:3000 입력하면 위에 'Send Request' 버튼 클릭
5. 응답 결과가 우측에 뜸.

### 2) 타입스크립트 설치

#### 타입스크립트 설치
```
npm i --save-dev typescript
```
- 타입스크립트는 개발환경에서만 필요하니까 --save-dev 옵션 꼭 쓰기

#### tsconfig.json 파일을 생성
```
npx tsc --init
```
![alt text](image.png)
- TypeScript 컴파일러에 대한 설정을 정의

#### 프로젝트 폴더 분리
```
 "rootDir": "src",    
  "outDir": "dist",   
 ```
- "rootDir": "src" : TypeScript 소스 파일(.ts 파일)이 위치하는 기본 디렉토리를 지정
- "outDir": "dist" : 컴파일된 JavaScript 파일이 저장될 위치를 지정

#### package.json 설정 변경
- 스크립트 명령어 변경
```
  "scripts": {
    "start": "node dist/app.js",
    "build": "tsc"
  },
```
- "type": "module" → 삭제
- "main": "dist/app.js"

#### 빌드
```
npm run build
```
![image](https://github.com/user-attachments/assets/28a6b2ae-7e86-4e5f-acce-1227a0992cd0)

---

# 2. 개발환경 편하게 쓰기

- 타입스크립트는 소스코드를 수정하면 빌드를 해서 JS로 만든 다음 실행을 해야됨. <br>
→ ts-node 와 nodemon으로 개발환경 편하게 세팅할 수 있음.

#### ts-node 설치
```
npm i --save-dev ts-node
```
- https://www.npmjs.com/package/ts-node

#### 스크립트 명령어 추가
```
"dev": "ts-node src/app.ts",
```

![image](https://github.com/user-attachments/assets/359b7308-693e-48e5-af17-93b18c2217dd)

- <b>문제점</b> : 코드를 수정할 때마다 해당 명령어를 입력하여 실행시켜야함.
- <b>해결방안</b> : nodemon 패키지를 설치하여 ts-node와 함께 사용할 것임.

#### nodemon 설치

```
npm i --save-dev nodemon
```
- https://www.npmjs.com/package/nodemon

#### 스크립트 명령어 수정

```
"dev": "nodemon --watch src --exec ts-node src/app.ts",
```
- 참고로 nodemon에서는 기본적으로 ts 파일은 exec에 대해서 ts-node를 사용하게 해줌.
- 아래와 같이 명령어를 입력해도 실행이 됨.

```
"dev": "nodemon --watch src src/app.ts",
```

![image](https://github.com/user-attachments/assets/31c685f7-2474-46ae-9238-c1f097bd7cf1)

![image](https://github.com/user-attachments/assets/4ec3b938-c64a-446e-ac16-88369ab162a3)

---

# 3. 타입 패키지 설치하기

---

# 4. Express 핸들러 타입 사용하기

---

# 5. 패키지의 타입 커스텀하기

---

# 6. ORM에서 타입 사용하기