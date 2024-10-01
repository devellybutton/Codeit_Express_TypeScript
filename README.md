## 바로가기

#### 1. [타입스크립트 설치](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#1-타입스크립트-설치-1)
#### 2. [개발환경 편하게 쓰기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#2-프로젝트-실행-가이드-1)
#### 3. [Express 핸들러 타입 사용하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#3-Express-핸들러-타입-사용하기-1)
#### 4. [패키지의 타입 커스텀하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file#4-패키지-타입-커스텀하기-1)
#### 5. [ORM에서 타입 사용하기](https://github.com/devellybutton/Codeit_Express_TypeScript?tab=readme-ov-file##5-ORM에서-타입-사용하기-1)

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
![alt text](image.png)

---

# 2. 개발환경 편하게 쓰기

---

# 3. 타입 패키지 설치하기

---

# 4. Express 핸들러 타입 사용하기

---

# 5. 패키지의 타입 커스텀하기

---

# 6. ORM에서 타입 사용하기