// 시저암호
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      answer += String.fromCharCode(((code - 65 + n) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      answer += String.fromCharCode(((code - 97 + n) % 26) + 97);
    } else {
      answer += s[i];
    }
  }
  return answer;
}
