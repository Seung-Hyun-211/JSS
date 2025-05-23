# 객체와 배열
## 객체
- 변수와 같이 var, let, const 사용 가능하다. (특성도 따라간다.)
- 중괄호 " { } "를 통해 속성을 만든다.

### 코드
```
//객체 생성
console.log(`vUser Hoisting : ${vUser}`);
//console.log(`lUser Hoisting : ${lUser}`); //Cannot access 'lUser' before initialization
//console.log(`vUser Hoisting : ${cUser}`); //Cannot access 'cUser' before initialization

//const 객체, 속성 : userName, age

//var, let 업데이트 가능하며 재선언도 가능
var vUser = {
    userName: "Charlie",
    age: 45
};
vUser.userName = "Cat";

var vUser = {
    userName: "Capybara",
    age: 4
}

let lUser = {
    userName: "Bob",
    age: 35
};
lUser.age = 37;
lUser = {
    userName: "Boo",
    age: 39
};

const cUser = {
    userName: "Alice",
    age: 25
};

//const 객체도 속성 업데이트 가능하다.
cUser.age = 27;

//const 객체는 재선언이 불가능 하다.
// cUser = {
//     userName: "Ace",
//     age: 25
// }
```

### 출력
```
vUser Hoisting : undefined
vUser : Capybara , 4
lUser : Boo , 39
cUser : Alice , 27
userName : Alice, age : 27
lName : Boo, lAge : 39
userName : Capybara, age : 4, phoneNum : undefined
```

## 배열 기초
- 배열은 Array **객체**이다.
- 크기 조정이 가능하며 다양한 형식을 혼합하여 저장할 수 있다.  
  (형식화 배열이 따로 있다.)
- 정수 인덱스로 접근이 가능하다.
- 복사연산은 얕은 복사이다.
    
### 코드
```
//배열
//대괄호 [ ], Array 생성자, 형식화 배열
const arr1 = [1, "kim", 3.7];
const arr2 = new Array(4, "lee", 6.5);
const arr3 = new Int16Array([1, 2, 3]);

//타입, 출력
console.log(typeof (arr1), arr1);
console.log(typeof (arr3), arr3);

//요소 접근
console.log(`nums1[0] : ${arr1[0]}`);

//길이
console.log(`length : ${arr1.length}`);

//추가
arr1.push("fourth"); //뒤
arr1.unshift(0); //앞
console.log(arr1);

//제거
arr2.pop(); //뒤
arr2.shift(); //앞
console.log(arr2);
```
### 출력
```
object [ 1, 'kim', 3.7 ]
object Int16Array(3) [ 1, 2, 3 ]
nums1[0] : 1
length : 3
[ 0, 1, 'kim', 3.7, 'fourth' ]
[ 'lee' ]
```

## 구조 분해

- 객체를 분해하여 새로운 변수들로 만들 수 있다.
- 새로운 변수로 만들 때는 변수명을 바꿀 수 있다.
- 객체에 없는 속성으로 만들 경우 초기값 'undefined'로 생성된다.

### 코드
```
const user = {
    userName: "Alice",
    age: 25
};


//구조 분해
const {userName, age} = user;
console.log(`userName : ${userName}, age : ${age}`);

const {userName:newName, age : newAge} = user;
console.log(`new Name : ${newName}, newAge : ${newAge}`);

const {phoneNum} = user;
console.log(`phoneNum : ${phoneNum}`);
```

### 출력
```
userName : Alice, age : 25
new Name : Alice, newAge : 25
phoneNum : undefined
```