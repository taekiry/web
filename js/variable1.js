 /*자바 스크립트 시작 외부에서 많이 만들어서 연결함*/ //5월2일 평가 뷰티파이 다시 설치.
    //데이터 베이스 관리 시스템(DBMS) -오라클 -> 로그인시 아이디 비번 오라클데이터베이스에 보내서 비교.
    //정보들 -> frontend -> backend -> oracle
    //변수(variable) - 데이터타입(문자,숫자,boolean(참/거짓),object,배열)

    let name; // 변수선언.
    name = "이창호"; // 값을 대입.
    let name1 = "홍길동" // 중복된 변수는 선언불가, 변수초기화.
    name = "김민수"; //name값이 이창호에서 김민수로 변경
    console.log(name); // 

    const age = 20; // 상수 선언& 초기화.
    //age = 30;  30 할당.

    // 선택자(selector). 유저밸류를 찾아오겠다
    let item = document.querySelector('#userValue');
    console.dir(item); //f12눌럿을때 여러 속성들 보여줌 console.log(item)하면 인풋 태그 형식으로 보여줌.
    name = item.value; //name에 value 속성값 가져옴 (변수에 속성값 할당).
    console.log(name); //사용자가 쓴것을 김민규로 받아옴.