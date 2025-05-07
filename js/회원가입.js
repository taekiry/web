//js.회원가입.js


document.querySelector('#buttons').addEventListener('click',function(e){
  
  let id = document.querySelector('#user-id').value;
  let pw = document.querySelector('#user-pw1').value;
  let pw2 = document.querySelector('#user-pw2').value;
  
  if (id.length < 4 || id.length > 15) {
    alert('다시 입력하세요.')
    document.querySelector('#user-id').focus();
  }
  if (pw.length < 8) {
    alert('다시입력하세요');
    document.querySelector('#user-pw1').value ="";
    document.querySelector('#user-pw1').focus();
  }
  if (pw !== pw2) {
    alert('비밀번호가 일치하지 않습니다.');
    document.querySelector('#user-pw1').value ="";
    document.querySelector('#user-pw2').focus();
  }
});
