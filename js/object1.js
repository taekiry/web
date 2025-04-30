//  object1.js
//  객체지향 : 자바 / 함수기반 : 자바스크립트/ 기능이 더많아지면서 서로 혼합 객체 + 함수

//  this
//  1. 객체(자기자신을 가리킴)
//  2. window 객체 (함수안에서) 가장 상위 객체.
function sum() {
  console.log(this);//콘솔에 시행하는 log라는 method
}
sum();
//  3. 이벤트의 대상 function8.js console.log(this);

// 객체 방식
let obj = {
  name : "홍길동",
  age: 20,
  showName: function() {
    return `이름은 ${this.name}입니다.` //obj로 하면 바뀔때마다 바꿔줘야되는데 this로 하면 객체 자신을 가리킴
   
  },
  setName(name1) {                //function 안쓰고 쓰기도 가능 : 없이 바로 소괄호
    this.name = name1;
  }
}
obj.setName("김길동");           //김길동이 obj.name인 홍길동에 덮어씀
let result = obj.showName();    //obj 객체 안의 showname이라는 method
console.log(result);


//  class 생성방식
class Person {                  // name, age 속성 //showName(),setName() 메소드
  constructor(name, age) {      //name,age 매개변수로 생성자
    this.name = name;
    this.age = age;
  }
  showName() {     
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = name;
  }
  showAge() {
    return `나이는 ${this.age}세 입니다.`;
  }
  setAge(age) {
    this.age = age;
  }
}                                  
let choi = new Person("최민식",22); // 인스턴스 생성 -> 구조로 새 객체를 생성 -> 변수에 정의
choi.setName("김민수");
console.log(choi.showName());

let park = new Person("박충식",30); // obj방식은 한명추가할때마다 복붙 수정해야하지만 클래스로 한번에 입력가능
park.setAge(24);
console.log(park.showAge());