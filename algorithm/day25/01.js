function solution(board, moves) {
  var answer = 0 // 인형을 터뜨린 횟수
  let basket = [] // 바구니
  let crane = 0 // 크레인의 행의 위치
  for (let i = 0; i < moves.length; i++) {
    crane = moves[i] - 1 // crane = 0
    for (let j = 0; j < board.length; j++) {
      if (board[j][crane] == 0) continue
      else if (board[j][crane] != 0) {
        basket.push(board[j][crane])
        board[j][crane] = 0
        if (basket[basket.length - 1] == basket[basket.length - 2]) {
          basket.pop()
          basket.pop()
          answer += 2
        }
        break
      }
    }
  }

  return answer
}
