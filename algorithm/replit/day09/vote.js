function vote(str) {
  let answer;
  let arr = new Map();

  str.forEach((v, i) => {
    if (arr.has(v)) arr.set(v, arr.get(v) + 1);
    else arr.set(v, 1);
  });

  let max = 0;
  for (let [v, k] of arr) {
    if (v > max) {
        max = v;
        answer = k;
    }
  }
  return answer;
}
