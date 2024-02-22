//
const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response, "response");
      callback(JSON.parse(xhr.response));
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};

const url = "https://jsonplaceholder.typicode.com";

get(`${url}/todos/1`, (response) => {
  console.log(response, "response");
  const userId = response.userId;

  get(`${url}/users/${userId}`, (userInfo) => {
    console.log(userInfo, "response userInfo");

    /* 콜백 헬 예시 */
    // // 유저 정보로 또 다른 데이터를 조회
    // const email = userInfo.email;
    // get(`${url}/users/${email}`, (response) => {
    //   // response 데이터로 또 다른 데이터를 조회 .... 반복
    //   const someInfo = response.someInfo;
    //   get(`${url}/${someInfo}`, (response) => {
    //     //.....콜백 헬
    //   });
    // });
    /* 콜백 헬 예시 */
  });
});
