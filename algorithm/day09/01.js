function solution(s) {
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "p" || s[i] === "P" ? p++ : 0;
    s[i] === "y" || s[i] === "Y" ? y++ : 0;
  }
  return p === y;

  // return s.match(/p/gi).length === s.match((/y/gi)).length;
}
