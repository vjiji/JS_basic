const testAsync = (genFunc) => {
  const generator = genFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);
    console.log(result);
    return result.done
      ? result.value
      : result.value.then((res) => onResolved(res));
  };
  return onResolved;
};

testAsync(function* genfetch() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = yield fetch(url);
  const todo = yield response.json();
  return todo;
})();
