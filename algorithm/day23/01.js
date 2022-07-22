function solution(N, stages) {
  var answer = []
  let fail = new Array(N + 2).fill(0)
  let challenge = new Array(N + 2).fill(0)
  let reached = new Array(N + 2).fill(0)

  for (const stage of stages) {
    for (let i = 1; i <= stage; i++) reached[i] += 1
    challenge[stage] += 1
  }
  for (let i = 1; i <= N + 1; i++)
    fail[i] = reached[i] === 0 ? 0 : challenge[i] / reached[i]
  const rateNIndex = fail
    .slice(1, N + 1)
    .map((rate, stage) => [rate, stage + 1])
  const sortRate = rateNIndex.sort((a, b) => b[0] - a[0])
  answer = sortRate.map((stage) => stage[1])
  return answer
}
