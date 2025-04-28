//for1.js
let sum = 0;
for (let i = 1; i <= 5; i++) { //1.초기값; 2.조건; 3.증감식
  sum += i; //sum = sum + i;
}
console.log('sum의 값은 ' + sum);

// 1 ~ 20 반복 => 짝수인 경우에만 합을 구하라

sum = 0;

for (let i = 1; i <= 20; i++) {//i는 지역변수라 일회용임 위에 i와 상관X
  if (i % 2 == 0) { //조건을 짝수일 때만으로
    sum += i;
  }
}
console.log(sum);
