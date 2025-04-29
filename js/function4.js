//function4.js
//함수 + 반복문 + 배열

let num = 10;
num = "10, 홍길동"; //하나의 값임 ,기준으로 가를 수 있지만
let numAry = [10, 20]; // 배열 객채. new Array(); 도 가능
numAry[0] //배열의 0번째 값부터 시작
console.log(numAry[0]);
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "hong"; //비추 오류날 수 있음
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;

console.log(numAry[2]);
console.log(numAry[3]);
console.log(`배열의 크기 : ${numAry.length}`); //.length 변수의 크기

// 배열 + for반복문. 
for (let i = 0; i < 6; i++) { //index가 0부터니까
  console.log(`[i]의 값: ${i}, 배열의 값: ${numAry[i]}`);
}

//배열의 값으로 연산 가능
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

//배열 요소의 합
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) { // if || (i == 0) 하면 0도 짝수로 친다
    sum += numAry[i];
  }
}
console.log(`배열요소의 합은 ${sum}입니다.`)

let sum2 = 0;
for (let i = 0; i < numAry.length; i++) {
  if (numAry[i] > 50) {
    sum2 += numAry[i];
  }
}
console.log(sum2);

//배열변수: param1 친구들나이 27, 28, 25, 30, 31, 36
//max(초기값: 0)
let ages = [28, 27, 25, 30, 31, 36];
console.log(ages);



// 함수: getMax()

function getMax(param1 = []) { //param1은 배열입니다.
  let max = 0;
  for (i = 0; i <= param1.length; i++) {
    if (max < param1[i]) { //현재 max보다 큰값이 있다면
      max = param1[i]; //max에 큰값을 할당
    }
  }
  console.log(`${max}이 제일 많은 나이입니다.`)
}

//함수실행
getMax(ages);
getMax([1, 5, 20, 12, 2, 100]);

//함수 getMinValue(매개값으로 배열);



function getMinValue(param2 = []) {//function의 매개변수는 배열
  let min = param2[0];// min은 매개변수의 첫번째 값;
  for (i = 0; i <= param2.length; i++) {
    if (min > param2[i]) {//min이 param2보다 큰값이라면
      min = param2[i];//param2는 min에 대입 => 점점작아짐
    }
  }
  return min;
}
let result = getMinValue([20, 27, 17, 30]);
console.log(`결과는 ${result}`);