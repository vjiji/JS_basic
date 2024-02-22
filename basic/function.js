// 변수와 마찬가지로 선언
// function 함수명(parameter) {  parameter(매개변수)는 함수에서 사용되는 변수
//     이 함수에서 실행할 코드들
//     return 반환값
//     }
// 사용하기 위해 호출

function calculateAvg(price1, price2) {
  const sum = price1 + price2;
  console.log(`두 상품의 합계는 ${sum}입니다.`);
  const avg = sum / 2;
  return avg;
}

const priceA = 1000;
const priceB = 2000;
const avg1 = calculateAvg(priceA, priceB); //함수 호출
console.log(`두 상품의 평균은 ${avg1}입니다.`);
