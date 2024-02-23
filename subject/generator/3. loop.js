function* getIdGen() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const id = getIdGen();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

function getIdFunc() {
  let i = 0;
  while (true) {
    ++i;
    console.log(i);
  }
}

// console.log(getIdFunc());
