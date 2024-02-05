// string + string = string
console.log("sung" + "ji");
// string + number = string
console.log("1" + 2);
console.log(1 + 2);

//Template literals : 여러 datatype이 섞여 있을 때 간결한 표현을 위해 사용
const myprice = 10000;
console.log("이 가격은" + myprice + "원 입니다.");
console.log(`이 가격은 ${myprice}원 입니다.`);

//+, -, /, *, **, %
console.log(10 % 3);
console.log(10 ** 2);

//증감연산자 ++ , -- : 압 뒤에 붙을 때 결과값이 다름
let count = 1;
const preIncrement = ++count;
console.log(`count: ${count}, preIncrement = ${preIncrement}`);

let count2 = 1;
const postIncrement = count++;
console.log(`count2: ${count2}, postIncrement = ${postIncrement}`);

//대입연산자 = : 값을 할당할 때 사용, 연산과 함께 사용하기도 한다. +=, -=
const price1 = 1000;
const price2 = 3000;
let total = 0;

total += price1;
console.log(total);
total += price2;
console.log(total);

//비교연산자: 항상 boolean을 리턴
console.log(1 > 2);
console.log(1 < 2);
console.log(1 + 2 > 4);

//논리연산자 ||, &&, ! : 항상 boolean을 리턴
let isOnSale = true;
let isDiscountItem = true;

console.log(isOnSale && isDiscountItem); // true && true 이므로 true
console.log(isOnSale || isDiscountItem); // true || true 이므로 true

isOnSale = false;
console.log(isOnSale && isDiscountItem); // false && true 이므로 false
console.log(isOnSale || isDiscountItem); // false || true 이므로 true

isDiscountItem = false;
console.log(isOnSale && isDiscountItem); // false && false 이므로 false
console.log(isOnSale || isDiscountItem); // false || false 이므로 false

console.log(!isOnSale); // !false 이므로 true

//일치연산자 === : 값의 일치함을 확인, boolean 리턴
console.log(1 === 0);
console.log("1" === "2");
console.log("a" === "A");
// == 와 ===의 차이 : ==은 값이 일치하지 않을 때 값의 타입을 변환하는 자바스크립트의 특성이 있어 사용하지 않음.
console.log(1 === "1"); //false
console.log(1 == "1"); //true

const applePrice = 1000;
const berryPrice = 2500;
let totalPrice = 0;
totalPrice += applePrice;
totalPrice += berryPrice;
console.log(totalPrice);
let discountedPrice = totalPrice * 0.8;
console.log(`총 ${discountedPrice}원에 과일을 샀습니다.`);
