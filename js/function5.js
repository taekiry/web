//function5.js
let names = ["홍길동", "박춘식", "김민수", "이영식"]

let search = prompt("검색할 이름 입력: ");
/*for(let i = 0; i<names.length; i++) {
  if ( search == names[i]) {
    alert('있음!');
    break;
  } else {
    alert('없음!');
    break;
  } 
}*/
let i = 0;
let exist = false; //존재여부 확인;
while (true) {
  if (i == names.length) {
    break;
  }
  if (search == names[i++]) { //찾는 친구의 이름이 존재.
    exist = true;
    break;
  }
}
if (exist) {
  alert('있음');
} else {
  alert('없음');
}