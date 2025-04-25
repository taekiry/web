// condition1.js
//if (조건){ }
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 5 < 3;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 || num2++ == 10;//num1값이 참이라 num2까지 실행되진않음.
//&&로 이으면 둘다 참이어야 참으로 실행
console.log(num1,num2);

isTrue = 0;// 0은 조건문상 true도아니고 false도아님 
// truthy/falsy (0," ",null, undefined, NaN들은 false로취급)
isTrue = 10;// 위 falsy 외엔 전부 True 값으로 취급

if (isTrue) {
  //isTrue의 참 -> if 블럭 실행
  console.log('참');
} else {
  //isTrue의 거짓 -> else 블럭 실행
  console.log('거짓');
}