//variable3.js
//연산자(+,-,/,*,%)
let num1 = document.querySelector('#num1').value;//.value 왜붙이는지 물어봐야대
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1);
num2 = parseInt(num2);

let result = num1++ + --num2;// 30 + 17 = 47이지만 문자값은 연결해줌 "30"+"17"=3017
let result1 = num1 + num2;
//parseInt()문자열을 숫자로 바꿔주는 기능 522pg
//%는 나머지 30을 17로 나누고 나머지
//num++ : 연산하기전 증가
//++num : 연산후 증가
console.log(result,num1,num2);
console.log(result1)
//result 값을 input#result의 value 속성에 대입.
document.querySelector('#result').value = result;

