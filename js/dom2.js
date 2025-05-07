//dom2.js\

let userList = [{
  uid : 'user01',
  uname: '홍길동',
  phone: '010-1111-2222'
},{
  uid : 'user02',
  uname: '최시원',
  phone: '010-1111-3478'
},{
  uid : 'user02',
  uname: '김명식',
  phone: '010-1111-2141'
},{
  uid : 'user02',
  uname: '박영범',
  phone: '010-1111-3181'
}]; 

//샘플 데이터 userList를 화면에 출력

userList.forEach(function(item){  //item은 요소를 나타냄 다른 이름해도됨.
  let tr = makeRow(item);
  document.querySelector('#list').appendChild(tr);
});

//전에는 버튼에 이벤트를 줬지만
//이번엔 input태그의 submit을 통해 form action에 이벤트가 작동되게 한다.
//                    form안에있는 속성[] 네임이 addForm인 속성
document.querySelector('form[name="addForm"]')
.addEventListener('submit',function(e){
  e.preventDefault();     //form의 기본 기능을 차단.
  console.log(e);         //e가 뭔지 알아보자
  
  let uid = document.querySelector('input[name="userId"]').value;
  let uname = document.querySelector('input[name="userName"]').value;
  let phone = document.querySelector('input[name="phone"]').value;

  // valdiation check. 입력값이 유효한지 확인해줘
  if (!uid || uid.length < 3) {
    alert('아이디를 확인하세요.');
    return;
  }
  if (!uname || uname.length < 2 ) {
    alert('이름을 확인하세요.')
    return;
  }
  
  if (!phone || phone.length < 6 ) {
    alert('번호를 확인하세요.')
    return; 
  }

  //위 세값을 객체로 만들기 obj{}
  let userInfo = {
    uid: uid,              // 객체 속성 : uid의 값(위에 선언한)
    uname: uname,
    phone: phone           // 속성, 값이 같다면 uid, name,phone 한줄로 써도됨.
  }
  // 함수안쓰고 tr만들기
  /*let tr = document.createElement('tr');//tr태그 만들기
  for ( let prop in userInfo ) {
    let td = document.createElement('td');
    td.innerHTML = userInfo[prop];      //userInfo의 속성값을 td안에 넣는다. userInfo.uid
    tr.appendChild(td);                 //tr의 자식요소로 td를 넣는다.
  }*/

  let tr = makeRow(userInfo) ; //입력한 값.
  // tbody의 하위요소에 추간
  document.querySelector('#list').appendChild(tr);
});
/////////////////////선택 삭제 버튼
  document.querySelector('button.selected').addEventListener('click',function(e){
  //체크박스 선택된 값을 대상으로해야함
  document.querySelectorAll('tbody#list input:checked').forEach(function(item){//forEach 앞의 대상을 기준으로 반복
    {// if(item.checked)
      console.log(item);
      item.parentElement.parentElement.remove();
    }
  });
});


///////////////////////////////////////////////////////////////
// 함수로 info만들기

function makeRow(user ={uid, uname, uphone}){ //user라는 매개변수는 obj이며 속성이 있다.
  let tr = document.createElement('tr');//tr태그 만들기
  tr.addEventListener('click',function(e){//tr영역을 클릭시 인풋태그에 그 정보가 들어가게끔
    document.querySelector('input[name="userId"]').value 
    = tr.children[1].innerText;   //선택한 tr 하위요소(td)의 값을 input에 할당.
    document.querySelector('input[name="userName"]').value 
    = user.uname;//tr.children[1].innerText;
    document.querySelector('input[name="phone"]').value 
    = tr.children[3].innerText;  // 이렇게되면 버튼이 tr안에 있기때문에 삭제버튼을 눌러도 인풋태그에 정보가 들어감
  });
  
  let td2 = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  td2.appendChild(checkbox);
  tr.appendChild(td2);
  
  
  for ( let prop in user ) { //user 매개변수의 속성값 개수로 반복
    let td = document.createElement('td');
    td.innerHTML = user[prop];      //userInfo의 속성값을 td안에 넣는다. userInfo.uid
    tr.appendChild(td);
  }
  
  let td = document.createElement('td');
  let btn = document.createElement('button'); 
  btn.innerHTML="삭제";      //<button>삭제</button>
  btn.className = "btn btn-danger" //<button class= "btn btn-danger"></button>
  btn.addEventListener('click',removeUserFnc, false); //addEvent의 세번재, 는 boolean값 초기값이 false임 flase는 bubbling방식 true는 capturing 방식 true로하면 tr들에 stopPropagtion을 줘야함.
  btn.addEventListener('click',resetInput);
  //btn.setAttribute('onclick','removeUserFnc(event)'); -> 이렇게 해도 같은 값 나오지만 밑에 e.target이아니라 event로 매개변수 통일
  td.appendChild(btn);       //<td><<button>삭제</button></td>
  tr.appendChild(td);        //<tr><td><<button>삭제</button></td></tr>
  /*btn.addEventListener('click',function(e){
    e.target.parentElement.parentElement.remove();
    });*/ //내방식
  return tr;
}

//삭제버튼의 이벤트핸들러(callback함수)
function removeUserFnc(e){
  e.stopPropagation(); // 이벤트 전파(하위요소에서 상위요소로 이벤트전달하는것 위 addevent가 false라서) 중단.
  console.log(e.target, this); //e.target, this == btn
  e.target.parentElement.parentElement.remove();
};


//내가만든거
function resetInput(){
  document.querySelector('input[name="userId"]').value  = "";
  document.querySelector('input[name="userName"]').value  = "";
  document.querySelector('input[name="phone"]').value  = "";
}