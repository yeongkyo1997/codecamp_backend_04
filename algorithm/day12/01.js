// 콜라츠 추측
function solution(num) {
  let answer = 0

  while (num > 1) {
    // num이 500보다 크다면 -1을 반환
    if (num > 500) return -1
    if (num % 2 === 0) num = num / 2
    else num = num * 3 + 1

    answer++
  }
  return answer
}
