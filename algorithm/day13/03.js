function numSum(num) {
  let result = 0;
  while (num != 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
function solution(x) {
  return x % numSum(x) === 0;
}
