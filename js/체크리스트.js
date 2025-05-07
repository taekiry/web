

  let arry = [];
  document.querySelector('#add').addEventListener('click',function(e){
  let item = document.querySelector('#item').value;
  arry.push(item);
  document.querySelector('#item').value = "";
  document.querySelector('#item').focus();
  
  if ( item == false ) {
    alert('입력하지 않았습니다.')
    arry.pop();
  }

  let newUl = createLi();
  
  function createLi(){
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerHTML = item;
  li.appendchild(item);
  ul.appendChild(li);
  console.log(item);
  }
  document.querySelector('#itemList').appendChild(newUl);
  /*let same = item;
  for( same in arry) {
  return alert('중복되었습니다');
  arry.pop();
  }*/
     
console.log(arry);
  }
  
  
  
  );


