function solution(num) {
  var answer = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
      answer++;
    } else {
      num *= 3;
      num++;
      answer++;
    }
    if (answer > 500) return -1;
  }
  return answer;
}
