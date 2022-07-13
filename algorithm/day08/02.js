function solution(x, n) {
  const range = (start, _, step) =>
    Array.from({ length: n }, (_, i) => start + i * step);
  return range(x, 5, x);
}
