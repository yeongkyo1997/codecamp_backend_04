function solution(new_id) {
  let answer = "";

  // new_id의 모든 대문자를 소문자로 변환
  new_id = new_id.toLowerCase();

  // new_id에서 숫자, -, _, ., 소문자를 제외한 문자를 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

  // new_id에서 .이 2개 이상 있다면 1개만 유지
  new_id = new_id.replace(/\.\.+/g, ".");

  // 처음이나 끝에 .이 있다면 .을 제거
  new_id = new_id.replace(/^\.|\.$/g, "");

  // new_id가 빈 문자열이라면 "a"를 대입
  if (new_id === "") new_id = "a";

  // new_id의 길이가 16이상이면 15자리만 추출
  if (new_id.length >= 16) new_id = new_id.substring(0, 15);

  // new_id의 길이가 2이하이면 길이가 3이 될때까지 마지막문자를 연결
  while (new_id.length < 3) {
    new_id += new_id.charAt(new_id.length - 1);
  }
  new_id = new_id.replace(/^\.|\.$/g, "");

  return new_id;
}
