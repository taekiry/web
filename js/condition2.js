//condition2.js
let num1 = prompt("숫자를 입력하세요!")
console.log(num1);

//짝수or홀수 판별 프로그램.
let n3 = num1 % 3 == 0
  if (n3) {// 조건문에서 ==으로 조건식 만들기 ""="안씀
    console.log('3의배수')
  } else {
    console.log('3의배수 아님')
  }
  // let n3 = num1 % 3
  // if (n3 == 0)도 가능