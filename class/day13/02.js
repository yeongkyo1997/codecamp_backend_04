function solution(a, b) {
  if (a > b) [a, b] = [b, a];

  let sum = 0;

  for (let i = a; i <= b; i++) sum += i;

  return sum;
}
