//while2.js
//사용자에게 1 ~ 10 까지 임의의 수를 입력하도록 요청
//범위밖의 값을 입력하면 종료, 입력값의 누적합을 콘솔출력.


let sum = 0;
while (true) {
  let num = parseInt(prompt(" 1~ 10 사이의 값을 입력하세요"))
  if (num > 10) {
    break;
  }
  sum += num; 
}
console.log(`누적값은 ${sum} 입니다`);

