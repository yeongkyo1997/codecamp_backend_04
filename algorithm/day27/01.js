function solution(n, arr1, arr2) {
  let binaryArr1 = [];
  let binaryArr2 = [];
  for (let i = 0; i < n; i++) {
    binaryArr1.push(arr1[i].toString(2).padStart(n, "0"));
    binaryArr2.push(arr2[i].toString(2).padStart(n, "0"));
  }

  let orArr = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < binaryArr1[i].length; j++) {
      if (binaryArr1[i][j] === "1" || binaryArr2[i][j] === "1") {
        str += "1";
      } else {
        str += "0";
      }
    }
    orArr.push(str);
  }

  let result = [];

  // 1이면 #
  // 0이면 공백
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < orArr[i].length; j++) {
      if (orArr[i][j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    result.push(str);
  }

  return result;
}
