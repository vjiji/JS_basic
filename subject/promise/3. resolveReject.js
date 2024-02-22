const resolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("test resolve");
    console.log("finish");
  }, 3000);
});
console.log(resolve);

const rejected = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    reject("test reject");
    console.log("finish");
  }, 3000);
});
console.log(rejected);
