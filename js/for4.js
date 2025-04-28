//for4.js
let str = "";
str += "<h3>구구단 출력</h3>"; //""안에 <h>태그 가능
//<p> 3 * 1 = 3 <p>
str += "<table class='table table-striped'>";
str += "<tbody>";
// str +=`<h3>${}단</h3>`);
//let m = p;
for (let n = 1; n <= 9; n++) {
  str += "<tr>";
  for (let p = 2; p <= 6; p++) {
    str += `<td>${p}  x  ${n}  =  ${p * n}</td>`;
  } //crtl + F =찾기
  str += "</tr>"
} //end of for
str += " </tbody>";
str += "</table>";
document.write(str);