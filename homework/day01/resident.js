export const checkValidation = (first, second) => {
  if (first.length !== 6 || second.length !== 7) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  }
  return true;
};


export const hideResident = (first, second) => {
  let result;
  result = first + "-" + second[0].padEnd(6, "*");
  return result;
};
