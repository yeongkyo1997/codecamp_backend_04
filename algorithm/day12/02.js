function solution(numbers) {
  let temp = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length && i !== j; j++) {
      temp.push(numbers[i] + numbers[j])
    }
  }
  let result = [...new Set(temp)]
  return result.sort((a, b) => {
    return a - b
  })
}

function solution1(numbers) {
  let temp = []
  // numbers에서 2개를 뽑아서 더한다.
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length && i !== j; j++) {
      temp.push(numbers[i] + numbers[j])
    }
  }

  // 중복을 제거한다.
  let result = [...new Set(temp)]

  // 오름차순으로 정렬한다.
  return result.sort((a, b) => {
    return a - b
  })
}
