function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
  return "end";
}

const gen = genFunc();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
