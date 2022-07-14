//assignment
const reverseStr = (list) => {
  // 아래에 코드를 작성해주세요.
  let answer = "";
  let strArr = [];

  for (let i = list.length - 1; i >= 0; i--) {
    let arr = [...list[i]];
    for (let j = 0; j < arr.length; j++) {
      if (/[A-Z]/.test(arr[j])) {
        arr[j] = arr[j].toLowerCase();
      } else {
        arr[j] = arr[j].toUpperCase();
      }
    }
    strArr.push(arr.join(""));
  }
  answer = strArr.join(" ");
  return answer;
};

reverseStr(["cODECAMP", "iS", "tHIS", "eVERYONE", "hELLO"]);

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = reverseStr;
