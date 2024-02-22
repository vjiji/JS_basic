// if(조건:boolean(비교연산자, 논리연산자, 일치연산자)) {
//     실행할 코드
// }

const shoesPrice = 40000;
if (shoesPrice < 50000) {
  console.log("신발을 사겠습니다.");
}
const capPrice = 50000;
if (capPrice < 50000) {
  console.log("모자를 사지 않겠습니다.");
}

// if(true) {
//     true일 때 실행
// } else {
//     false일 때 실행
// }
const applePrice = 1000;
if (applePrice < 3000) {
  console.log("과일을 사겠습니다.");
} else {
  console.log("너무 비싸요. 사지 않겠습니다.");
}

// if(true) {
//     true일 때 실행
// } else if (true) {
//     다음 조건이 true일 때
// } else {
//     false일 때 실행
// }

const myage = 18;
if (myage > 20) {
  console.log("성인입니다.");
} else if (myage > 13) {
  console.log("청소년입니다.");
} else {
  console.log("아이입니다.");
}

const distance = 2;
if (distance < 2) {
  console.log("걸어가자");
} else if (distance >= 2 && distance < 5) {
  console.log("택시를 타자");
} else {
  console.log("기차를 타자");
}
