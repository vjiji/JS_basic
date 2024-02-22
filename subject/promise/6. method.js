// all, allSettled, race, any

const prom1 = new Promise((resolve, reject) =>
  setTimeout(() => reject("error 1"), 1000)
);
const prom2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("result 2"), 2000)
);
const prom3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("error 3"), 3000)
);

Promise.any([prom1, prom2, prom3])
  .then((response) => console.log(response))
  .catch((error) => console.log(error, "error"));
