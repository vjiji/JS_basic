const get = (url) => {
  return new Promise((resolve__, reject__) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response, "response");
        resolve__(JSON.parse(xhr.response));
      } else {
        reject__(xhr.status, xhr.statusText);
      }
    };
  });
};

const url = "https://jsonplaceholder.typicode.com";

get(`${url}/todos/1`);
