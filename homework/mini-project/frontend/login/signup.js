// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex"
  const phone1 = document.querySelector("#PhoneNumber01").value
  const phone2 = document.querySelector("#PhoneNumber02").value
  const phone3 = document.querySelector("#PhoneNumber03").value

  axios.post("http://localhost:3000/tokens/phone", {
    phone: phone1 + phone2 + phone3,
  })

  console.log("인증 번호 전송")
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const phone1 = document.querySelector("#PhoneNumber01").value
  const phone2 = document.querySelector("#PhoneNumber02").value
  const phone3 = document.querySelector("#PhoneNumber03").value

  axios.patch("http://localhost:3000/tokens/phone", {
    token: document.querySelector("#TokenInput").value,
    phone: phone1 + phone2 + phone3,
  })

  console.log("핸드폰 인증 완료")
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.querySelector("#SignupName").value
  const email = document.querySelector("#SignupEmail").value
  const personal = document.querySelector("#SignupPersonal1").value
  const prefer = document.querySelector("#SignupPrefer").value
  const pwd = document.querySelector("#SignupPwd").value

  const phone1 = document.querySelector("#PhoneNumber01").value
  const phone2 = document.querySelector("#PhoneNumber02").value
  const phone3 = document.querySelector("#PhoneNumber03").value
  const phone = phone1 + phone2 + phone3

  axios.post("http://localhost:3000/user", {
    name,
    email,
    personal,
    prefer,
    pwd,
    phone,
  })

  console.log("회원 가입 완료")
}
