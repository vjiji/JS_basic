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

//then
get(`${url}/todos/1`).then(
  (response) => {
    console.log(response, "===then callback 1===");
  },
  (error) => console.log(error, "===then callback 2===")
);

//catch
const testCatch = () => {
  return new Promise((_, reject) => reject("test catch"));
};
testCatch()
  .then((response) => {
    console.log(response, "===then callback ===");
  })
  .catch((error) => console.log(error, "===catch callback==="));

//finally
testCatch()
  .then((response) => {
    console.log(response, "===then callback ===");
  })
  .catch((error) => console.log(error, "===catch callback==="))
  .finally(() => console.log("===finally callback==="));
