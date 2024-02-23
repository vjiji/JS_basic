const get = (url) => {
  return new Promise((resolve__, reject__) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve__(JSON.parse(xhr.response));
      } else {
        reject__(xhr.status, xhr.statusText);
      }
    };
  });
};

const url = "https://jsonplaceholder.typicode.com";

const getTodos = async (url) => {
  const response = await get(url);
  console.log(response);
};

// getTodos(`${url}/todos/1`);

// fetch 사용
const getFetchTodos = async (url) => {
  const response = await fetch(url);
  const info = await response.json();
  console.log(info);
};

getFetchTodos(`${url}/todos/1`);

// 예외 처리

const getTodosInTryCatch = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status, response.statusText);
    const info = await response.json();
    console.log(info, "info");
  } catch (err) {
    console.log(err);
  }
};

// getTodosInTryCatch(`${url}/todos/1`);
