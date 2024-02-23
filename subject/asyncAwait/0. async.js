// 항상 Promise 객체 리턴
const makeAsync = async () => {
  return "result";
};

// then,catch 후속처리 가능
const func = makeAsync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
console.log(func);

// 함수별 async 사용법
async function asyncFunc(word) {
  return word;
}
const asyncFunc2 = async function (word) {
  return word;
};
const obj = {
  async asyncFunc3(word) {
    return word;
  },
};
class MyClass {
  async asyncFunc4(word) {
    return word;
  }
}
