## 변수 기본내용
- Hoisting : JS 엔진은 코드를 실행하기 전에 변수와 함수를 **끌어올린다**.  
  (이게 왜 있는지는 JS엔진과 관련이 있다.)
- Shadowing : 같은 이름의 변수가 안쪽 스코프에서 새로 선언되면 바깥 스코프의 변수를 가린다.  
(즉 함수 선언이 코드 상에 아래 있어도 실행 전에 위로 끌어올려지게 됨)
- 변수가 사용되는 구역(Scope)에는 **함수 스코프**, **블록스코프** 가 있으며 변수타입에 따라 다르다.

### 코드
```
console.log(`Hoisting 된 let a : ${a}`);

if(true){
    var a = 10;
    console.log(`Shadowing된 a : ${a}`);
}

var a = 10;
```
### 출력
```
Hoisting 된 let a : undefined
Shadowing된 a : 10
```


## var 변수
- 함수 스코프
- 선언시 초기화 하지 않으면 'undefined'가 된다.

### 코드
```
console.log("var 변수 x1, x2");
var x1 = 1;
var x2; //undefined
console.log(`x1 = ${x1}, x2 = ${x2}`);

if (true) {
    var x1 = 100;
    console.log(`블록 안에서의 x1 = ${x1}`);
}
console.log(`블록 밖에서의 x1 = ${x1}`);
```
### 출력
```
var 변수 x1, x2
x1 = 1, x2 = undefined
블록 안에서의 x1 = 100
블록 밖에서의 x1 = 100
```


## let 변수
- 블록 스코프
- 선언시 초기화 하지 않으면 'undefined'가 된다.
### 코드
```
console.log("let 변수 y1, y2");
let y1 = 2;
let y2; // undefined
console.log(`y1 = ${y1}, y2 = ${y2}`);

if (true) {
    let y1 = 200;
    console.log(`블록 안에서의 y1 = ${y1}`);
}
console.log(`블록 밖에서의 y1 = ${y1}`);
```
### 출력
```
let 변수 y1, y2
y1 = 2, y2 = undefined
블록 안에서의 y1 = 200
블록 밖에서의 y1 = 2
```
  
## const 변수
- 블록 스코프
- 선언과 초기화가 함께 이루어 져야한다.
- 다시 할당하거나 선언할 수 없다.
- undefined로 선언할 수 있다.
### 코드
```
console.log("const 변수 z1, z2");
const z1 = 3;
//const z2; *SyntaxError: Missing initializer in const declaration
const z3 = undefined;
console.log(`z1 = ${z1}, z2 = error, z3 = ${z3}`);


if(true){
    const z1 = 300;
    console.log(`블록 안에서의 z1 = ${z1}`);
}
console.log(`블록 밖에서의 z1 = ${z1}`);
```
### 출력
```
const 변수 z1, z2
z1 = 3, z2 = error, z3 = undefined
블록 안에서의 z1 = 300
블록 밖에서의 z1 = 3
PS C:\Users\tmdgus211\Documents\JSS> 
```