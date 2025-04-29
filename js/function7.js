//function7.js
console.log(friends); // 6번에 선언해둔것 7번에서도 연동

//함수: makeRow(friend={})

function makeRow(friend={name,age,phone}) {//{}안에 안써도됨 but 무슨속성있었는지 기억하려고
  let str = "";//function 위에 넣으면 표가 중복으로나옴
  str += "<tr>";
  for(let a in friend) {
   str += `<td>${friend[a]}</td>`;
  }
  str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`;
  str += "</tr>";
  return str;
}
//출력.
let titles = ["이름", "나이","연락처"];
let tlist = "";
tlist += "<table class = 'table'>";
for (let a in titles) {
tlist += `<th>${titles[a]}</th>`;
}
tlist += "<tbody>";
//for (let i = 0; i < friends.length; i++) {
// tlist += makeRow(friends[i]);

for (let a of friends) {  // for..of => 배열 반복 (배열의 크기만큼반복) b는 그냥변수
  tlist += makeRow(a);
}
tlist += "</tbody></table>";
document.write(tlist);


let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-7777"
}

//for .. in 
for (let prop in friend) { // for(몇번돌겟다는 조건) friend안에 prop변수로 속성을 차례대로 받아옴
  console.log(`속성(prop): ${prop}, 값(val):${friend[prop]}`);
                                    //friend안에 가변적인 속성을 가져오기위해 []
}




