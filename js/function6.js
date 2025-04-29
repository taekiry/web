//function6.js
// 배열 + object 
let num = 10;

let obj = {
  name: "홍길동", //컴마로 다음 객체
  age: 20,
  phone: "010-1111-2222",
  pets: [{
    name: '야옹이',
    age: 2,
    검진일: ['2025-01-04', '2025-04-03']
  }, {
    name: '멍멍이',
    age: 3,
    검진일: ['2024-05-03']
  }]
}; // new Object(); 원래 형식/ {}; 객체를 생성한다는 의미 []:배열 처럼

console.log(obj.pets[0].검진일[0]);
console.log(obj.pets[1].name);

//배열 + object
let friends = [
  {name : "홍길동", age : 20, phone: "010-111-2222"},
  {name : "김민식", age : 21, phone: "010-333-4444"},
  {name : "이영동", age : 22, phone: "010-666-5555"}
];


for (let i=0; i<friends.length; i++) {
  if(friends[i].name == "홍길동") {
    console.log(friends[i].age);
  }
}
let max = 0;
for (let i=0; i<friends.length; i++) {
  if(max <friends[i].age) {
    max = friends[i].age 
  }
}
console.log(max);

let sum = 0;
let avg = 0;
for (let i = 0; i < friends.length; i++) {
  if (max < friends[i].age)
      sum += friends[i].age;
}
