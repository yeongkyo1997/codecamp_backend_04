function solution(nums) {
  let result = 0;
  // 중복제거
  let unique = [...new Set(nums)];
  // unique 정렬
  unique.sort((a, b) => {
    return a - b;
  });

  if (unique.length > nums.length / 2) {
    return Math.floor(nums.length / 2);
  }
  return unique.length;
}
