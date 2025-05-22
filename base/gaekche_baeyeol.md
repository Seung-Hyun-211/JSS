# 객체와 배열
## 객체
- 변수와 같이 var, let, const 사용 가능하다. (특성도 따라간다.)
- 중괄호 " { } "를 통해 속성을 만든다.

### 코드
```
//const 객체, 속성 : userName, age
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

//let, var 또한 업데이트 가능하며 재선언도 가능
let lUser = {
    userName: "Bob",
    age: 35
};
lUser.age = 37;
lUser = {
    userName: "Boo",
    age: 35
};

var vUser = {
    userName: "Charlie",
    age: 45
};
```
### 출력
```
userName : Alice, age : 27
lName : Boo, lAge : 35
userName : Charlie, age : 45, phoneNum : undefined
```
## 배열

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