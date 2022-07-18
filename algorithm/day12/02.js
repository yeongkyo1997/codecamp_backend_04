function solution(numbers) {
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length && i !== j; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  let result = [...new Set(temp)];
  return result.sort((a, b) => {
    return a - b;
  });
}
