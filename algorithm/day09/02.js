function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, index) =>
          index % 2 === 0
            ? (debug = word[index].toUpperCase())
            : (debug = word[index].toLowerCase())
        )
        .join("")
    )
    .join(" ");
}

solution("tRy hello wOrld");
