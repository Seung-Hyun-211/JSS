//2. 함수 표현식 : 변수에 익명 함수를 할당
// sayHi 선언전에 사용 안됨 Hoisting X
var sayHi = function(name){
    return `Hi, ${name}`;
}

sayHi = greet;

//3. 화살표 함수
const sayBye =(name) =>`Bye, ${name}`;


//4. 콜백 함수
function process(num, callback){
    return callback(num);
}
const result = process(5, (x)=> 2*x);

console.log(greet("Alice"));
console.log(sayHi("Bob"));
console.log(sayBye("Carol"));

//1. 기본 함수 선언 방식
//Hoisting 됨
function greet(name){
    return `Hello, ${name}`;
}

//함수 스코프 
function getScore() {
  const num1 = 2;
  const num2 = 3;

  // 중첩된 함수
  function add() {
    return `scored ${num1 + num2}`;
  }

  return add();
}