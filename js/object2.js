// object2.js 
// 배열내장객체: new Array() 또는[]
// 관련 메소드 : push, pop, unshift, shift => forEach 595pg.
// push : 배열 제일뒤에 추가 pop : 배열 마지막요소를 꺼내 결과 값으로 반환
//let arr1 = new Array(); 클래스로 사용가능 하지만 밑에처럼 바로하면 편함

let arr1 = [10, 20, 30];
arr1[3] = 40;                 //arr1[3]에 40 추가
arr1.push(50);                //arr1에 50이라는 값을 추가하는 메소드 push();
arr1.unshift(60);             //unshif : 60을 제일 앞에 추가
arr1.pop();                   //pop 맨마지막 값 삭제 [60, 10, 20, 30, 40]
arr1.pop();                   //[60, 10, 20, 30,]
arr1.shift();                 //맨 앞에 값 삭제  [10, 20 ,30]
arr1.splice(1, 1, 15, 16, 17);        //특정위치에 추가 or 삭제 1번째 인덱스값에 0개를 15,16,17로 대체 ->추가됨 
                                      // 삭제하려면 splice(1,1) 대체값이 없으므로 1번째 1개를 삭제

//evry, some
let result = arr1.every(function(item, idx, ary){ //매개값 필요한것만 선언해도됨.
  return item % 2 == 1;
});
console.log(result);                              //배열의 모든 값이 홀수여야 true

let result2 = arr1.some(item => item % 2 == 1);  //매개값 필요한것만 선언
console.log(result2);                             //배열의 어떤 값이 홀수면 true
                                      

arr1.forEach(function(a, b, c) {      //arr1 에 들어있는 갯수 만큼 function을 실행
  console.log(a,b,c);                 //a : 배열안에 요소 b : 인덱스 값 c: length와 배열 그자체
});


