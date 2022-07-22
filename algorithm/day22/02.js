function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) if (num % i === 0) return false
  return true
}
function solution(nums) {
  let result = 0
  let sum = 0
  function recursion(start, len) {
    if (len === 3) {
      if (isPrime(sum)) {
        result++
      }
      return
    }

    for (let i = start; i < nums.length; i++) {
      sum += nums[i]
      recursion(i + 1, len + 1)
      sum -= nums[i]
    }
  }
  recursion(0, 0)
  return result
}
