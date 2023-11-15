# 자바스크립트 스니펫
> 코딩테스트를 위한 자바스크립트 스니펫

## 백준 입력값 받기
```javascript
// 입력값이 한 줄 일때
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
```

```javascript
// 입력값이 한 줄에 공백으로 구분되었을 때
// ex) a b c
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
```

```javascript
// 입력값이 여러 줄 일때
const fs = requre("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

## 문자열을 배열로 변환
```javascript
const str = "hello world!";

// 스프레드 연산자 이용
const arr1 = [...str];
console.log(arr1); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

// split() 메서드 이용
const arr2 = str.split("");
console.log(arr2); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

// Array.from() 메서드 이용
cosnt arr3 = Array.from(str);
console.log(arr3); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
```
