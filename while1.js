//while1.js
// 1~10 까지의 값 중에서 홀수 값만 콘솔에 출력.


/*for (i = 1; i<=10; i++) {
  if ( i % 2 == 1) {
    console.log(i);
  }

}*/

/*while("조건을만족하는 동안에") {
  실행명령
}*/
// 반복회수는 상관없이, 조건을 만족하는동안 반복.

/*let num = 1
while (true) {
  if (num % 2) {
    console.log(num);//나머지가 1로 존재하면 true 0은 fasly기 때문에 if
  }
  if (num >= 10) {
    break;//반복종료.
  }
  num++;
}*/

//임의의 값(0 ~ 100) 값을 생성하다가 50보다 작은 값이 나오면 반복종료.
let running = true;
while (running) {
  let num = Math.floor(Math.random() * 101);
  console.log(num);
  if (num == 100) {
    break;
  }
}
console.log("end of prog.");


/*while (true) {
  let num = Math.floor(Math.random() * 101);
  console.log(num);

  if (num < 20) {
    break;
  }
}*/

