//function8.js
console.log(json); //문자열
let data = JSON.parse(json); //json 문자열을 객체타입으로 변경.
console.log(data); //객체
//JSON.stringify() 객체를 문자열로 변경
let fields = ['id', 'first_name', 'gender', 'email', 'salary']
//button<삭제> 템플릿.
let btnTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";
function deleteTr




//사원목록을 Table 형식으로 출력

let elist = "<table class='table'><thead>";
elist += "<tbody>"
for (let field in fields) {
  elist += `<th>${fields[field]}</th>`; //fields의 갯수만큼 반복하는데 field의속성값을 출력
} //for in 사용하면 밑에 필드[속성] for of 사용하면 [속성];
for (let emp of data) {
  elist += makeTr(emp);
  
}
elist += "<thead></tbody></table>";

document.write(elist);

//tr을 생성하는 함수.
function makeTr(emp = {}) { //function makeTr의 매개변수 emp는 객체이다.
  let str = "<tr>";
  //객체의 속성 3가지를 필드s로 정의
  for (let field of fields) { //필드s의 크기만큼 for구문 반복하라고 field로 선언
    //console.log(emp[field]);//emp['id'] == emp.id// 매개변수emp의 속성을 표시
    str += `<td>${emp[field]}</td>`; //emp의 속성값들을 for구문 반복만큼 만듦
  }
  str += `<td>${btnTemplate}</td>`;
  str += "</tr>";
  return str;
}

// event 넣기.
//document.querySelector('button.btn-primary')//버튼태그 클래스이름이 btn-primary인
document.querySelector('button#searchBtn')
.addEventListener('click', function () { //버튼태그 아이디searchBtn//애드이벤트리스너(어떤이벤트,익명함수)
    //클릭하면 함수안에 정의된 코드를 실행하라

    let searchValue = document.querySelector('#userValue').value;
    let list = "";
    for (let a of data) {
      if (searchValue == a.gender) {
        list += makeTr(a); //매개변수 다르게 정의해도되는지 확인O
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list; //테이블중에 class가 table임
});

// 전체, 여자,남자 option을 change하는 이벤트 select "change"

document.querySelector('select#selectGender').addEventListener('change', function () {
//selectGender가 change하면 아래 기능을 해라
  let selectValue = document.querySelector('#selectGender').value;
  
  let li = "";//방만들어놓기
  for (let a of data) {
    if (selectValue == 'All' || selectValue == a.gender) {
      li += makeTr(a);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = li;
});












/*console.log(makeTr({
  id:12,
  first_name: "kildong",
  email: "kildong@email.com"
}));*/