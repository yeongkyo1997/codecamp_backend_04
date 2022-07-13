function sliceSort(array, command) {
  let result = [];

  result = array.slice(command[0] - 1, command[1]);
  result = result.sort((a, b) => {
    return a - b;
  });

  return result[command[2] - 1];
}

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(sliceSort(array, commands[i]));
  }
  return answer;
}
