import axios from "axios";

// 1. 비동기 방식
function fetchPost() {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log("비동기 방식: ", result); // Promise
}

fetchPost();

// 2. 동기 방식
async function fetchPost2() {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log("동기 방식: ", result.data); // 정상적인 데이터
}

fetchPost2();
