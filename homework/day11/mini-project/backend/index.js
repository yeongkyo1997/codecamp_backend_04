import express from "express"
import {
  checkValidationPhone,
  getToken,
} from "./mvc/controllers/services/phone.js"
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"
import { options } from "./swagger/config.js"
import cors from "cors"
import mongoose from "mongoose"
import { Token } from "./mvc/models/tokenSchema.js"
import { Starbucks } from "./mvc/models/starbucksSchema.js"
import { UserController } from "./mvc/controllers/user.controller.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))

// 회원가입 API
const userController = new UserController()
app.get("/users", userController.userFetch) // 회원가입 목록 조회 API
app.post("/user", userController.userRegist) // 회원가입 API

// 토큰 검증 API(finish)
app.patch("/tokens/phone", async (req, res) => {
  const { phone, token } = req.body
  const checkMyphone = await Token.findOne({ phone })

  if (!checkMyphone) {
    res.send(false)
    return
  }

  if (checkMyphone.token !== token) {
    await Token.updateOne({ phone }, { isAuth: false })
    res.send(false)
    return
  }

  await Token.updateOne({ phone }, { isAuth: true })
  res.send(true)
})

// 토큰 전송 API(finish)
app.post("/tokens/phone", async (req, res) => {
  const phone = req.body.phone

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(phone)
  if (isValid) {
    const mytoken = getToken() // token 받아오기

    const tokenPhone = await Token.findOne({ phone })

    // DB에 핸드폰이 있을 경우
    if (tokenPhone !== null) {
      await Token.updateOne({ phone }, { token: mytoken }) // 새로운 토큰을 저장
      await Token.updateOne({ phone }, { isAuth: false }) // 이전 인증을 초기화 시킴
    } else {
      // DB에 핸드폰이 없는 경우
      const newToken = new Token({
        token: mytoken,
        phone,
        isAuth: false,
      })
      await newToken.save()
    }
    // sendTokenToSMS(phone, mytoken); // coolsms로 토큰 전송 받기

    res.send(
      `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(
        7,
        11
      )}으로 인증 문자가 전송되었습니다.`
    )
  }
})

// 스타벅스 커피 목록 조회 API (finish)
app.get("/starbucks", async (req, res) => {
  const result = await Starbucks.find()
  res.send(result)
})

// mongoDB 접속
mongoose.connect("mongodb://my-database:27017/mini-docker")

// 접속을 기다리는 API
app.listen(3000, () => {
  console.log(`프로그램을 켜는데 성공했어요!!`)
})
