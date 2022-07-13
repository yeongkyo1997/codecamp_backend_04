function solution(s) {
  let regexp = /^\d{6}$|^\d{4}$/;
  return regexp.test(s);
}
