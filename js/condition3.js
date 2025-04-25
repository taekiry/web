// condition3.js
//let result = Math.random() * 10; // 0 <= 랜덤 소수값 < 1
let result = Math.floor(Math.random() * 10); //floor는 소수점 버리기
console.log(result);

//30 ~ 100 사이의 점수.
let result2 = 30 + Math.floor(Math.random() * 71); //floor는 소수점 버리기
console.log(result2)

/*if (result2 > 60) {
  console.log("pass")
} else {
  console.log("fail")
}*/
//범위를 나눠서 if구문
// 100 ~ 90 : "A"
//  ~ 80 : "B"
// ~ 70 : "C"
// ~ 60 : "D" 그외 "F"

/*if (result2 >= 90) {
  console.log("A")
} else if (result2 >= 80) {
  console.log("B")
} else if (result2 >= 70) {
  console.log("C")
} else if (result2 >= 60) {
  console.log("D")
} else { 
  console.log("F")
}*/

if (result2 >= 90) {
  console.log("A")
} if (result2 >= 80) {
  console.log("B")
} if (result2 >= 70) {
  console.log("C")
} if (result2 >= 60) {
  console.log("D")
} else { 
  console.log("F")
}
// if구문이 4개라서 4개 값이 나옴