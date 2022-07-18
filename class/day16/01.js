// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
function solution(a, b) {
  let d31 = [1, 3, 5, 7, 8, 10, 12];
  let d30 = [4, 6, 9, 11];
  let d29 = [2];
  let answer;
  let dict = {
    1: "FRI",
    2: "SAT",
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
    0: "THU",
  };
  let day = b;

  for (let i = 1; i < a; i++) {
    if (d31.indexOf(i) != -1) {
      day += 31;
    } else if (d30.indexOf(i) != -1) {
      day += 30;
    } else {
      day += 29;
    }
  }
  answer = dict[day % 7];

  return answer;
}
