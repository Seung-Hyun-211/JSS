
// console.log(`Hoisting 된 let a : ${a}`);
// if(true){
//     var a = 10;
//     console.log(`Shadowing된 a : ${a}`);
// }
// var a = 10;

// // var 변수
// console.log("\n\nvar 변수 x1, x2");
// var x1 = 1;
// var x2; //undefined
// console.log(`x1 = ${x1}, x2 = ${x2}`);

// if (true) {
//     var x1 = 100;
//     console.log(`블록 안에서의 x1 = ${x1}`);
// }
// console.log(`블록 밖에서의 x1 = ${x1}`);


// // let 변수
// console.log("\n\nlet 변수 y1, y2");
// let y1 = 2;
// let y2; // undefined
// console.log(`y1 = ${y1}, y2 = ${y2}`);

// if (true) {
//     let y1 = 200;
//     console.log(`블록 안에서의 y1 = ${y1}`);
// }
// console.log(`블록 밖에서의 y1 = ${y1}`);


// const 변수
console.log("\n\nconst 변수 z1, z2");
const z1 = 3;
//const z2; *SyntaxError: Missing initializer in const declaration
const z3 = undefined;
console.log(`z1 = ${z1}, z2 = error, z3 = ${z3}`);


if(true){
    const z1 = 300;
    console.log(`블록 안에서의 z1 = ${z1}`);
}
console.log(`블록 밖에서의 z1 = ${z1}`);