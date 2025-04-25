// condition5.js
// switch..case 문. 533pg

/*let num1 = prompt("숫자를 입력하세요 ex: 1, 2, 3");*/

switch (num1) {
  case "1": console.log("1을 선택");break;//break로 해당값에서 멈춤
  case "2": console.log("2을 선택");break;
  case "3": console.log("3을 선택");break;
  default: console.log("1,2,3중에 선택하시오");//else에 해당
}
//if보다 명확하게 조건 가져올 수 있는 장점이 있음. 
//대신 범위설정을 위해 케이스에 대한 정확한 값이 필요함

//30 ~ 100 임의의 값
let result = 30 + Math.floor(Math.random() * 71 );
console.log(result);

result = Math.floor(result/10); // 95/10 = 9.5 -> math.floor로 9ㄴ
console.log(result);

switch(result) {
  case 10:
  case 9: console.log("A");break;
  case 8: console.log("B");break;
  case 7: console.log("C");break;
  case 6: console.log("D");break;
  default: console.log("F");
}