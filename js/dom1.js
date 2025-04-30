//dom1.js

//createElement(), appendChild(), setAttribute(), querySelector()

/*let li = document.createElement("li");           // li 태그 만들기
let sp1 = document.createElement("span");
sp1.innerText = "사과";
let sp2 = document.createElement("span");
sp2.innerText = "2000원";
let txt =document.createTextNode(" ");
li.appendChild(sp1);                  //li의 자식요소로 sp1을 받아들임
li.appendChild(txt);
li.appendChild(sp2);*/

//636page부터 읽어보기
//document.querySelector('ul').appendChild(li); //document영역에서 ul을 찾고 li를자식요소로 받아들임



// 애드버튼 이벤트
document.querySelector('#addBtn').addEventListener('click',addCallback);


//이미 html에 존재하는 버튼 삭제 이벤트
document.querySelectorAll('ul button').forEach(function(item){
  console.log(item);
  item.addEventListener('click',function(li){
    li.target.parentElement.remove();
  });
});
//스타일 적용을 위한 mouseover (마우스가 올라가면) 이벤트
document.querySelectorAll('li').forEach(item => {
  console.log(item);
  item.addEventListener('mouseover',function () {
    item.style.backgroundColor = "cyan";
  })
  item.addEventListener('mouseout',function () {
    item.style.backgroundColor = "";
  })
});




//콜백 함수
function addCallback(){
  let fruit = document.getElementById('fruit').value;   //#이미 내장된 함수
  let price = document.querySelector('#price').value;

// 입력값이 있는지 체크.
  if(fruit == "" || price == "") { //if(!fruit || !price)와 같음
    alert('값을 입력하세요.')
    return; //함수의 실행 종료를 의미
  }

  let newList = createLi(fruit,price);
  document.querySelector('ul').appendChild(newList); //부모-자식 관계생성.

  document.getElementById('fruit').value = ""; // 입력값 초기화
  document.getElementById('price').value = 0;
};

function createLi(fruitName, fruitPrice){
  let li = document.createElement("li");           // li 태그 만들기
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt =document.createTextNode(" ");

//삭제버튼.
  let btn = document.createElement("button"); 
  btn.innerText = "삭제";

  //btn버튼에게 특성을 부여함. btn class에게 btn-danger를
 // btn.setAttribute('class','btn btn-danger');//<button id="delBtn" class="btn btn-danger">삭제</button>
  btn.className = 'btn btn-danger';
  btn.addEventListener('click', function() {
    btn.parentElement.remove();
  });

  li.addEventListener('mouseover',function(){
    li.style.backgroundColor = "cyan";
  });
  li.addEventListener('mouseout',function(){
    li.style.backgroundColor = "";
  });
 
  //li의 자식요소로 sp1을 받아들임 실질적으로 <li></li>태그안에 다 집어넣는용
  li.appendChild(sp1);                  
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li; // <li> 반환
}

