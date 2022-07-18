// 소수 만들기
function solution(nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      answer.push(nums[i]);
    }
  }
  return answer;
}
