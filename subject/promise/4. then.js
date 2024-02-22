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

get(`${url}/todos/1`).then((response) => {
  console.log(response, "===then===");
  const userId = response.userId;
  get(`${url}/users/${userId}`)
    .then((response) => {
      console.log(response, "===then2===");
      const email = response.email;
      get(`${url}/users/${email}`);
    })
    .then((response) => {
      const errorData = response.errorData;
      console.log(errorData, "===then3===");
    })
    .catch((error) => console.log(error, "===catch==="));
});
