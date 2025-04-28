//function2.js

function sum(num1 = 0, num2 = 0) { //초기값 0으로 할당해두면 if코드가 필요가 없음 매개변수의 초기값.
  let result = 0;
  /* if(num2 == undefined) {
     result = num1 + 0;
   } else {
     result = num1 + num2;
   }*/
  result = num1 + num2;
  return result;
}
console.log(sum(20)); // 매개값중 하나 빠지면 NaN : not a number 뜸


function printStar(times = 1, shape = '') { // times =1 초기값 설정 아무것도 안썻을 시 1로 출력 
  //매개변수는 초기값, 형식을 설정하고 실제투입시에 따라바뀜
  let str = '';
  for (let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str);
}
printStar(5, '🔥');

// 구구단을 출력하는 함수. document 영역에 출력하는 함수.
function printGugudan(dan = 2) {
  for (let i = 1; i <= 9; i++) {
  document.write(`<p>${dan} * ${i} = ${dan * i}</p>`);
  }
}
printGugudan(7);