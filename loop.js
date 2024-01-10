// while(조건) {실행} : 조건을 만족하는 동안 {}안의 코드를 실행한다. 조건이 계속 true를 리턴할 수 있는 무한루프에 유의한다.
let temperature = 20;
while (temperature < 25) {
  console.log(`${temperature}도 정도면 적당한 온도입니다.`);
  temperature++;
}

// for(조건) {실행} 더 명시적으로 반복문의 조건을 표현 가능, 무한루프에 유의한다.
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
for (let temperature = 20; temperature < 25; temperature++) {
  console.log(`${temperature}도 정도면 적당한 온도입니다.`);
}

for (let index = 1; index < 11; index++) {
  if (index % 3 === 0) {
    console.log(index);
  } else {
    console.log("wrong", index);
  }
}

for (let index = 1; index < 21; index++) {
  if (index % 2 === 0) {
    console.log(`${index}는 짝수입니다.`);
  } else {
    console.log(`${index}는 홀수입니다.`);
  }
}
