//funciton1.js
//2개의 수의 큰 값에 10을 더하고 작은 값에 5를 더한 후 합을 구하는 기능

let num1 = 4,
  num2 = 2;
let result = 0;

/*if(num1 > num2) {
  result = (num1 + 10) + (num2 + 5);
} else { 
  result = (num2 + 10) + (num1 + 5);
}
console.log(`결과값 ${result}`);*/

//함수의 정의.

function sum(parameter1, parameter2) { //함수정의 안에서 변수로 사용됨
  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
  } else {
    result = (parameter2 + 10) + (parameter1 + 5);
  }
  //console.log(result);
  return result; // return : 함수를 호출한 영역으로 결과를 반환.
}

num1 = 5, num2 = 2;
sum(num1, num2)
document.write(`결과값 ${result}`);
sum(1, 2);
console.log(`결과값 ${result}`);

result = sum(15, 20);
document.querySelector('#result').value = result;
alert(`결과값 ${result}`);


