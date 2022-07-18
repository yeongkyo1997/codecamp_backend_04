function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();

  for (let a = 0; a < participant.length; a++) {
    if (participant[a] !== completion[a]) {
      return participant[a];
    }
  }
  return participant;
}
