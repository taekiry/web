//variable2.js
let num1 = 100; //let 1num = 200; 변수 이름 규칙이 맞아야함 영문 숫자 순서 대문자는 피하기. 
num1 = "hundred"; //자바는 변수선언시 타입을 알려줘야함. 스크립트는 느슨해서 문자 까지가능 but 문제발생가능
console.log(typeof num1); //string : 문자배열 number: 숫자


let num_2 = 200; //변수 이름에 어떤것을 사용할지 잘 나타내는게 좋은 변수.
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // 띄워쓰기대신 대문자로 씀(관례).birth_of_date 헷갈릴까바
//object(객체) 타입
console.log(typeof birthOfDate);

let isOk = true;
isOk = 10 < 5; //false.
isOk = 10 > 5;

if (isOk) {
  //isOk값이 true일 경우 {}블럭을 실행.
  console.log('isOk는 참입니다.');
}

//배열: [100, 200, 250] 여러개의 값을 저장.
let numAry = [10, 20, 25, 31];
//numAry[0]인덱스에서 첫번째 위치값 0부터시작
console.log(numAry[1]);

let strAry = ["hello", "nice", "good", 300] //문자, 숫자 가능하지만 안쓰는게 좋다
console.log(strAry[0]);

//객체(object). "키: 값(value)"의 형태로 구성. 변수하나에 여러가지 정보 가능
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function(){ //콘솔에 이름과 나이를 출력해주는 기능
    console.log('이름은' + person.name + '이고 나이는' + person.age);
  }
  
}
person.personInfo();//메소드를 호출(call)하겠다.실행과 같은의미

console.log(person.name);

//undefied, null
let whatIsThis;
whatIsThis = document.querySelector('#userValu'); //콘솔 왼쪽 흰배경이 다큐먼트 영역
console.log(whatIsThis);//변수 선언했지만 값이 없어서 undefined로 표현됨. 위에 #uservalu라고 표현하면 null 책516pg