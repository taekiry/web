//for2.js
// 1~10까지 반복. 
//2의 배수, 3의 배수 => 2의 배수는 sum2 저장
//                     3의 배수는 sum3 저장

let sum2 = 0;
let sum3 = 0;

for ( let i = 1; i <=10; i++) {
 if( i % 2 == 0) {
    sum2 += i; //6은 2의배수로 먼저 처리되서 sum2에 저장됨. 
  } else if ( i % 3 == 0) {
    sum3 += i; // 3 + 6(x) + 9 = 12 else if 가 아니라 if문으로 하면 6도 포함됨.
  }
}//end of for
console.log("2의배수 의 합 : " + sum2 , "3의 배수의 합 : " + sum3);