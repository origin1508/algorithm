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

## 문자열 반복하기
```javascript
const str = "A";

// repeat() 메서드 이용
console.log(str.repeat(5)); // AAAAA
```

## 배열의 평균 구하기
```javascript
const arr = [1, 3, 5, 7, 9];

const avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
console.log(avg); // 5
```

## 배열 뒤집기
```javascript
// reverse() 메서드 이용 - 원본 배열을 변형
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.reverse();
console.log(arr); // [7, 6, 5, 4, 3, 2, 1]
```

```javascript
// sort() 메서드를 이용 - 원본 배열이 정렬됨
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.sort((a, b) => -1);
console.log(arr); // [7, 6, 5, 4, 3, 2, 1]
```

## 정수 판별
```javascript
const num1 = 9.99;
const num2 = 99;

// Number.isInteger() 메서드 이용
console.log(Number.isInteger(num1)); // false
console.log(Number.isInteger(num2)); // true

// 나머지 연산자 이용
console.log(num1 % 1 === 0); // false
console.log(num2 % 1 === 0); // true
```

## 문자열 치환하기
```javascript
const str = "hello world";

// replace() 메서드 이용 - 새로운 문자열을 반환
const newStr1 = str.replace("world", "javascript");
console.log(newStr1); // hello javascript

// 정규표현식과 함께 이용
// 정규표현식의 플래그가 g라면 모든 문자열을 치환한다.
// 플래그가 i라면 대소문자를 구분하지 않고 치환한다.
const re = new RegExp("javascript", "g");
// or const re = /javascipt/g;
// or const re = new RegExp(/javascript/, "g");

const newStr2 = str.replace(re, "world");
console.log(newStr2); // hello world;
``


