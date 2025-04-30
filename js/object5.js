//object5.js
//Date 객체 : 날짜, 시간

let now = new Date(0);            //Date(0) -> 1970-01-01이 기준시
console.log(now);               
now.setDate(20);                  //now의 날짜를 20일로 변경
//now = new Date("01/01/2025");
console.log(now.getFullYear());
console.log(now.getMonth());      // 1월은 값이 0 "MM/DD/YYYY" "YYYY-MM-DD"
console.log(now.getDay());        // 0(sun), 1(mon)...6(sat)

function getKorDay(day =1 ){ 
  switch(day) {
    case 0 : return "일요일";      //return은 반환해주기때문에 break; 필요없음
    case 1 : return "월요일";
    case 2 : return "화요일";
    case 3 : return "수요일";
    case 4 : return "목요일";
    case 5 : return "금요일";
    case 6 : return "토요일";
  }
}
console.log('오늘은 ' + getKorDay(now.getDay()) + ' 입니다.');

