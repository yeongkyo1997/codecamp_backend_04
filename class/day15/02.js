function solution(s) {
  // 연속된 공백제거
  let arr = s.split(" ").filter((v) => v !== "");

  // 첫번째 글자를 대문자로 변환
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      // 대문자를 소문자로
      if (arr[i][j] === arr[i][j].toUpperCase()) {
        arr[i] =
          arr[i].slice(0, j) + arr[i][j].toLowerCase() + arr[i].slice(j + 1);
      }
    }
  }

  return arr.join(" ");
}

solution("     try     helLo worLd");