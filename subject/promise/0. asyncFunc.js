let todos;

const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response, "response", "순서1");
      todos = JSON.parse(xhr.response);
      todosInFunc = JSON.parse(xhr.response);
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};

const url = "https://jsonplaceholder.typicode.com";
get(`${url}/todos/1`);
console.log(todos, "순서2");
