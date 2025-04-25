//condition4exe.js
//1~ 10 임의의 값을 생성하고
//생성된 값을 변수에 저장한 후
//2의 배수 또는 3의 배수인지 또는 2의배수 또는 2,3의 배수가 아님

let result1 = Math.floor(Math.random() * 10 + 1);
console.log(result1);


if (result1 % 3 == 0) {
  console.log("3의배수");
} else if (result1 % 2 == 0) {
  console.log("2의배수");
} else {
  console.log("2,3의 배수가 아님");
}

let result2 = Math.floor(Math.random() * 10 + 1)
console.log(result2);

n1 = result2 % 2 == 0 || result2 % 3 == 0;
if (n1) {
  console.log("2또는3의배수");
} else {
  console.log("2또는 3의배수가 아님");
}

/*let result3 = Math.floor(Math.random() * 10 ) + 1
if (result3 % 2 == 0 && result3 % == 0) {
  console.log("2와3의 배수")
} else if ()
 */
