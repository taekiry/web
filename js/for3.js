//for3.js
let sum = 0;// 합.
let avg = 0;//평균.
let count = 0;//합한 횟수

for (let i = 1; i <= 5; i++) {
  let str = prompt("1~10까지의 숫자를 입력하세요.")
  let inputvalue = parseInt(str); // "7"->7 변환
  if (inputvalue >= 1 && inputvalue <= 10) {
    sum += inputvalue;// js.scritp에서는 1<= x <= 10한번에 부등호처리 불가
    count++;
  }
}//end of for
avg = sum / count; //평균 계산
console.log(`누적합계: ${sum}입니다. 평균은 ${avg}입니다.`); // 1왼쪽에 ` 안에 $표시하면 
//console.log("누적합계 :" + sum + "입니다")처럼 연산자 쓸필요 X


