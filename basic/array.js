//Array : 같은 형식의 데이터를 '순서'대로 저장하고 사용하기 위한 데이터 타입

// 배열을 선언하는 두 가지 방법
//첫 번째 : 새로운 배열 객체를 만드는 Array클래스를 사용, 배열 또한 객체이다.
const arr1 = new Array(1, 2, 3);
console.log(arr1);
// 간단하게 선언
const arr2 = [4, 5, 6];

// 인덱스를 사용해 배열 내의 데이터에 접근
console.log(arr2[0]);

const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

// 배열에는 사용할 수 있는 속성과 내장 method가 많이 있다.
console.log(rainbowColors.length); // Array 객체에 선언된 length속성

rainbowColors.push("white"); //push() 메서드: 요소 추가
console.log(rainbowColors);
rainbowColors.pop(); //pop() 메서드: 마지막 요소 제거
console.log(rainbowColors);

// 배열의 반복문
// 배열의 요소를 변수로 할당
for (const color of rainbowColors) {
  console.log(color);
}
