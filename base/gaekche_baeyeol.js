//객체 생성
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

//구조 분해
const { userName, age } = cUser;
console.log(`userName : ${userName}, age : ${age}`);

const { userName: lName, age: lAge } = lUser;
console.log(`lName : ${lName}, lAge : ${lAge}`);

const { userName: vName, age: vAge, phoneNum } = vUser;
console.log(`userName : ${vName}, age : ${vAge}, phoneNum : ${phoneNum}`);


//배열
const nums = [1, 2, 3];
const [a, b, c] = nums;
console.log(b);