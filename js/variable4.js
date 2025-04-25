//variable4.js
//연산자 524pg

let num1 = "10";
num1 = num1 + "20" //할당 연산자 오른쪽 값을 왼쪽에 할당. "1020"
num1 = num1 + "30" //"102030"
console.log(num1);

num1 += "40"; //num1 = num1 + "40" 
console.log(num1);

let num2 = 10; //number
num2 += 20;
num2 += 30; //60

num2 = num2 - 5; //55
num2 -= 5; //50
console.log(num2);
num2 = num2 * 2; //100
num2 *= 2; //200
console.log(num2);

//비교연산자. 525pg
console.log(num2 == 220); //num2와 220을 비교 220이 아니니'false'

num2 = 10203040;

console.log(num2 == num1); //동일할시 'strue' 엄밀히 보면 데이터값 다름 문자,숫자
console.log(num2 === num1); //데이터값까지 비교 'false'

console.log(num2 != num1); //!는 not의 의미/ 값만 비교 'false' 
console.log(num2 !== num1); //값과 타입도 비교 값은 같지만 타입이 다르니 true

//논리연산자. 526pg
console.clear();//콘솔창 삭제하기

console.log(num1 >= num2 || num1 < 100); //앞의 식과 뒤의식 OR
console.log(num1 >= num2 && !(num1 < 100)); //앞의 식과 뒤의식 AND

