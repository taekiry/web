//while3.js
//친구 이름을 입력.=> quit 종료.


//화면 요소 삭제하는 함수
function removeElement(parameter1) {
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove(); //제거
}

/*let running = true;
let str = "";
str += "<table class = 'table table-striped>";
str += "<tbody>";
while (running) {
  let userValue = prompt("이름을 입력하세요");
  if (userValue == "quit") {
    running = false;
    continue;
  }
  str += `<tr><td>${userValue}</td>
          <td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td></tr>`;
} //end of while
str += "</tbody>";
str += "</table>";
document.write(str);*/


//let running = true;
//while (running) {
//let uservalue = prompt("친구이름")
//if (uservalue == "quit")
//running = false; 종료조건.if문과 break 안쓰고 가능
//continue;

let str = "";
str += "<table class = 'table'>";
str += "<tbody>";
let running = true;
while(running){
  let userValue = prompt("친구이름을 입력하세요.");
  if (userValue == "quit"){
    running = false;
    continue;
  }
  str += `<tr><td>${userValue}</td>
  <td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td>
  </tr>`;
  // onclick Evemt : 사용자가 요소를 클릭할 때 발생하는 이벤트
  // button 태그에 onclick event가 발생하면 removeElement 함수 호출
}
str += `</tbody></table>`;
 document.write(str);