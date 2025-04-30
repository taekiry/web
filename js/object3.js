//object3.js
//indesOf();

let numArr = [10, 21, 33, 54, 16, 73];
let result = numArr.indexOf(333);
console.log(result); //333번째는 없는 값 따라서 -1로 출력(찾는요소가 없다)

let strAry = ["홍길동", "김길동", "홍길순"];
console.log("홍길동".indexOf("길")); //홍길동에서 길의 인덱스값은? 1

strAry.forEach(function (item) {
  if (item.indexOf("홍") == 0) { //성씨가 "홍"씨인 사람
    console.log(item);
  }
});

// numAry(변수) => 10 ~ 50 사이의 값을 10개 저장. 콘솔에 출력(forEach);


let numAry = [];
for (i = 0; i <= 9; i++) {
  let arr = Math.floor(Math.random() * 41) + 10
  numAry.push(arr);
};
let result2 = numAry.every(function (item) { // 모든 값이 10 ~ 50 사이인지 검증
  return item <= 50 && item >= 10;            // if(item <= 50 && item >= 10) {
                                              //  return true;
                                              // } else {
                                              //  return false;
                                              // }

});
console.log(result2);

numAry.forEach(function (item, idx, ary) {
  console.log(item, idx, ary);
});

/*result2 = numAry.every(item => item>= 10 && item <= 50);
console.log(result2);*/