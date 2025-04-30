//object4.js
//filter() 조건을 만족하는 요소를 새로운 배열을 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52]
let filteraAry = numAry.filter(function(item, idx, ary) {
  return item % 2 == 1;
});
//return undefined는 falsy 값 false는 아니고

console.log(filteraAry);

///// salary가 5000이 넘는 사원들을 empAry에 저장.

let data = JSON.parse(json);
console.log(data);

let empAry = data.filter(function(item){
  return item.salary > 5000;
})
console.log(empAry);