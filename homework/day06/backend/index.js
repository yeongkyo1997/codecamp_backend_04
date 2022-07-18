import express from "express"
import cors from "cors"
import { sendTokenToSMS, getToken, checkValidationPhone } from "./phone.js"
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js"

const app = express()
app.use(cors())
app.use(express.json())
app.get("/users", (req, res) => {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "영희",
      phone: "010-4123-4236",
      personal: "798243-2943781",
      prefer: "https://google.com",
    },
    {
      email: "ccc@gmail.com",
      name: "짱구",
      phone: "010-9823-9741",
      personal: "457896-0984653",
      prefer: "https://daum.com",
    },
    {
      email: "ddd@gmail.com",
      name: "맹구",
      phone: "010-4857-7690",
      personal: "857634-8734652",
      prefer: "https://coupang.com",
    },
    {
      email: "eee@gmail.com",
      name: "유리",
      phone: "010-8475-9684",
      personal: "493823-89326",
      prefer: "https://apple.com",
    },
  ]
  res.send(result)
})

app.get("/starbucks", (req, res) => {
  let result = [
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 10 },
    { name: "콜드브루", kcal: 15 },
    { name: "카페모카", kcal: 50 },
    { name: "돌체라떼", kcal: 500 },
    { name: "카라멜라떼", kcal: 500 },
    { name: "바닐라라떼", kcal: 20 },
    { name: "에스프레소", kcal: 1 },
    { name: "디카페인", kcal: 5 },
    { name: "오트라떼", kcal: 300 },
  ]
  res.send(result)
})

app.post("/tokens/phone", (req, res) => {
  const myphone = req.body.phone

  const isValid = checkValidationPhone(myphone)
  if (isValid) {
    const mytoken = getToken()

    sendTokenToSMS(myphone, mytoken)
    res.send("인증완료")
  }
})

app.post("/email", (req, res) => {
  const user = req.body.myuser

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email)
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(user)

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(user.email, mytemplate)
    res.send("가입완료!!!")
  }
})

app.listen(3000, () => {
  console.log("연결되었습니다.")
})
