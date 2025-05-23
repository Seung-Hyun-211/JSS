// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN#%EB%88%88%EC%97%90_%EB%9D%84%EA%B2%8C_%EA%B5%AC%EB%B3%84%EB%90%98%EB%8A%94_nan_%EA%B0%92
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// NaN의 byte 표현을 가져옵니다.
const n = f2b(NaN);
// 부호 비트이고 NaN에 중요하지 않은 첫 번째 비트를 변경합니다.
n[0] = 1;
const nan2 = b2f(n);
// console.log(nan2); // NaN
// console.log(Object.is(nan2, NaN)); // true
// console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
// console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]

// console.log(f2b(1)); // 정상 숫자
// console.log(f2b(Infinity)); // 무한대
// console.log(f2b(NaN)); // NaN

// const a = new String("Hello world"); // a === "Hello world" 는 false입니다
// const b = String("Hello world"); // b === "Hello world" 는 true 입니다
// console.log(a instanceof String); // true
// console.log(b instanceof String); // false
// console.log(typeof a); // "object"
// console.log(typeof b); // "string"

var radData = "My NaMe Is MuD";
radData.toLowerCase();
console.log(radData.toLowerCase());
radData.toUpperCase();
console.log(radData.toUpperCase());
