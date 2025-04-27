// condition6exe.js
// 두수를 입력 -> 큰 값을 콘솔에 출력 -> 두 수중 큰값음 ?>? 입니다

// 임의의 2개의 수 ( 40-70)을 생성 -> 2개의 수중에서 큰 값은 ?? 입니다

// 컨디션3.js에 ABCD 등급에 95 이상 A+ 구간 만들기

// 반복문 (537pg)예습

let num1 = prompt("첫 번째 수를 입력하세요")
let num2 = prompt("두 번째 수를 입력하세요")
/*let max = prompt("두 수를 입력하세요")
max = parseInt(max)
console.log(max);*/

console.log(Math.max(num1, num2));

if (num1 > num2) {
  console.log("두 수중 큰 값은" + num1 + "입니다.")
} else {
  console.log("두 수중 큰 값은" + num2 + "입니다.")
}

let number1 = Math.floor(Math.random() * 31) + 40;
console.log(number1);

let number2 = Math.floor(Math.random() * 31) + 40;
console.log(number2);

if (number1 > number2) {
  console.log('큰 값은' + number1 + '입니다.');
} else if (number2 > number1) {
  console.log('큰 값은' + number2 + '입니다.');
} else {
  console.log("두 수는 같습니다.");
}

let result1 = 30 + Math.floor(Math.random() * 71);
console.log(result1);

if (result1 >= 95) {
  console.log("A+");
} else if (result1 >= 90) {
  console.log("A");
} else if (result1 >= 85) {
  console.log("B+");
} else if (result1 >= 80) {
  console.log("B");
} else if (result1 >= 75) {
  console.log("C+");
} else if (result1 >= 70) {
  console.log("C");
} else if (result1 >= 65) {
  console.log("D+");
} else if (result1 >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let sum = 0;

for ( let i = 1; i < 6; i++) {
  sum += i;
}

