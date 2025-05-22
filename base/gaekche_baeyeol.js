//객체 생성
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


//배열
const nums = [1,2,3];
const [a,b,c] = nums;
console.log(b);