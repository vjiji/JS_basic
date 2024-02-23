//과일 게산하기
function* calcFruitPrice() {
  const fruitPrice = {
    apple: 100,
    banana: 400,
    berry: 700,
    mango: 1300,
  };

  let total = 0;

  const [fruit1, count1] = yield fruitPrice;

  let currentPrice = fruitPrice[fruit1] * count1;
  total += currentPrice;

  const [fruit2, count2] = yield { calc: currentPrice, total: total };

  currentPrice = fruitPrice[fruit2] * count2;
  total += currentPrice;

  const [fruit3, count3] = yield { calc: currentPrice, total: total };

  currentPrice = fruitPrice[fruit3] * count3;
  total += currentPrice;

  return { calc: currentPrice, total: total };
}

// 제너레이터 함수를 호출해 제너레이터 객체를 반환
// 제너레이터 객체 = 이터러블, 이터레이터 객체 => 반복 가능한 next() 메서드 존재
const calculator = calcFruitPrice();
console.log(calculator, "===제너레이터 객체===");

//최초 호출 : next의 인수에 아무것도 넣지 않음
//첫 yeild를 반환
let price = calculator.next();
let myMoney = 3000;

console.log(price.value, "===start===");
console.log(myMoney, "===내가 가진 돈===", `\n\n`);

//두번째 호출 : next에 인수를 전달하면 제너레이터 함수의 변수에 할당
// price 에는 두번째 호출의 결과 값(yeild)이 할당된다.
price = calculator.next(["apple", 3]);
myMoney -= price.value.calc;

console.log(price.value, "===첫번째 과일 구매===");
console.log(myMoney, "===남은 돈===", `\n\n`);

//세번째 호출 : next에 다시 인수 전달
// price 에는 세번째 호출의 결과 값(yeild)이 할당된다.
price = calculator.next(["berry", 2]);
myMoney -= price.value.calc;

console.log(price.value, "===두번째 과일 구매===");
console.log(myMoney, "===남은 돈===", `\n\n`);

//네번째 호출 : next에 다시 인수 전달
// price 에는 네번째 호출의 결과 값(yeild)이 할당된다.
price = calculator.next(["mango", 1]);
myMoney -= price.value.calc;

console.log(price.value, "===세번째 과일 구매===");
console.log(myMoney, "===남은 돈===", `\n\n`);

//마지막 호출 후 done의 상태가 true로 바뀐다.
console.log(price, `\n\n`);

//이후 호출의 결과값은 undefined를 반환한다.
price = calculator.next();
console.log(price);
