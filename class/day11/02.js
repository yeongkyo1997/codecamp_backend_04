function solution(arr) {
  let minNum = Math.min(...arr);
  let result = arr.filter((element) => minNum !== element);
  if (result.length === 0) return [-1];
  return result;
}
