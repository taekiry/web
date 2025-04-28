//function3exe.js
//1. 함수의 이름 max (10,7) => "두 수중에서 큰 값은 10입니다."

function max(a=1,b=1) {
  if (a > b) {
    console.log(`두 수중에서 큰 값은 ${a}입니다`);
  } else {
    console.log(`두 수중에서 큰 값은 ${b}입니다`);
  }
}
max(10,20);

//2. sumUpTo(7) => "1부터 7까지의 합은 22입니다"
let result = 0;
function sumUpto(c=1) {
  for (let i=1; i<=c; i++) {
    result += i;
   }
   console.log(`1부터 ${c}까지의 합은 ${result}입니다.`);
  }
   sumUpto(10);
//3. diff(34,17) => "두 수의 차는 17입니다."


function diff (d=1,e=1) {
  if (d > e) {
    console.log(`두 수의 차는 ${d - e }입니다.`);
  } else if ( e < d) {
    console.log(`두 수의 차는 ${e - d }입니다.`);
  } else {
    console.log(`두 수의 차는 0 입니다.`);
  }
}
diff(10,20);