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

console.log(`vUser : ${vUser.userName} , ${vUser.age}`);
console.log(`lUser : ${lUser.userName} , ${lUser.age}`);
console.log(`cUser : ${cUser.userName} , ${cUser.age}`);


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



//구조 분해
const { userName, age } = cUser;
console.log(`userName : ${userName}, age : ${age}`);

const { userName: lName, age: lAge } = lUser;
console.log(`lName : ${lName}, lAge : ${lAge}`);

const { userName: vName, age: vAge, phoneNum } = vUser;
console.log(`userName : ${vName}, age : ${vAge}, phoneNum : ${phoneNum}`);