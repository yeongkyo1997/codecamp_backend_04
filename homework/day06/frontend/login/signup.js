// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const myphone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  await axios
    .post("http://localhost:3000/tokens/phone", {
      phone: myphone,
    })
    .then((res) => {
      console.log(res.data);
    });
  console.log("인증 번호 전송");
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");
};
