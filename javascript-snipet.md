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

// Array 메서드 이용
console.log(Array(5).fill(str).join(""); // AAAAA
console.log(Array(6).join(str)); // AAAAA
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
```

## 대소문자 판별
```javascript
const str = "AaBbCcddd";

// toUpperCase() or toLowerCase() 이용
const isUpper = (str) => [...str].map(v => v === v.toUpperCase() ? "upper" : "lower");
console.log(isUpper(str)); // ["upper", "lower", "upper", "lower", "upper", "lower", "lower", "lower", "lower"]

// match() 메서드 이용
const re = new RegExp("[a-z]");
// const re = /[A-Z]/;
// const re = new RegExp(/[a-z]/);

const isLower = (str) => [...str].map(v => v.match(re) ? "lower" : "upper");
console.log(isLower(str)); //["upper", "lower", "upper", "lower", "upper", "lower", "lower", "lower", "lower"]
```

## 배열의 마지막 요소 가져오기
```javascript
const arr = ["a", "b", "c", "d", "e"];

console.log(arr[arr.length - 1]); // e

// at() 메서드 이용
console.log(arr.at(-1)); // e

// silce() 메서드 이용
console.log(arr.slice(-1)); // ["e"]
// -2를 넣으면 뒤에서 두번째 원소까지 가져온다
console.log(arr.slice(-2)); // ["d", "e"]
```

## 숫자를 문자열로 변환
```javascript
const num = 99

// 빈 문자열 붙이기
const str1 = num + "";

// 템플릿 리터럴 이용
const str2 = `${num}`;

// toString() 메서드 이용
const str3 = num.toString();

console.log(typeof str1 === "string"); // ture
console.log(typeof str2 === "string"); // ture
console.log(typeof str3 === "string"); // ture
```

## 배열 회전시키기
`pop()`메서드는 배열의 **맨 뒤** 요소를 제거하고 제거된 요소를 반환  
`push()`메서드는 배열의 **맨 뒤에** 요소를 추가하고, 새로운 길이를 반환  
`shift()`메서드는 배열의 **맨 앞** 요소를 제거하고 제거된 요소를 반환  
`unshift()`메서드는 배열의 **맨 앞에** 요소를 추가하고, 새로운 길이를 반환
```javascript
// left
const arr = [1, 2, 3, 4, 5];

const backward = arr.shift();
arr.push(backward);
console.log(arr); [2, 3, 4, 5, 1]
```

```javascript
// right
const arr = [1, 2, 3, 4, 5];

const forward = arr.pop();
arr.unshift(forward);
console.log(arr); [5, 1, 2, 3, 4]
```

## 옵셔널 체이닝
```javscript
const user = {};

console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
console.log(user?.address?.street); // undefined
```

## 조합
```javascript
const arr = ["a", "b", "c"];

const getCombination = (arr, num) => {
  if (num === 1) return arr.map(el => [el]);
  const result = [];

  arr.forEach((el, idx, self) => {
    const select = el;
    const remain = self.slice(idx + 1);

    const combination = getCombination(remain, num - 1).map(el => [select, ...el]);
    result.push(...combination);
  })
  return result;
};

console.log(getCombination(arr, 2)); // [["a", "b"], ["a", "c"], ["b", "c"]]
```

## 힙
```javascript
class MaxHeap {
  constructor() {
    this.values = [];
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  remove() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.swap(idx, swap);
      idx = swap;
    }
  }
}

let heap = new MaxHeap();

```

## 우선순위 큐
```javascript
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority <= element.priority) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swapIdx;
      const leftChilid = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      if (leftChilid && leftChilid.priority < element.priority) {
        swapIdx = leftChildIdx;
      }

      if (rightChild && rightChild.priority < element.priority) {
        swapIdx = swapIdx || rightChildIdx;
      }

      if (!swapIdx) break;
      this.swap(idx, swapIdx);
      idx = swapIdx;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue()
```

## 단일 연결 리스트
```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SiglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let cur = this.head;
    let newTail;
    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }
    if (newTail) {
      this.tail = newTail;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return cur;
  }

  shift() {
    if (!this.head) return undefined;

    let curHead = this.head;
    this.head = curHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return curHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let cur = this.head;
    while (count !== index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let prevNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SiglyLinkedList();
```
