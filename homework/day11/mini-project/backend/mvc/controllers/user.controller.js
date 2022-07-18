import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./services/email.js"
import { scrapingOG } from "./services/scraping.js"
import { Token } from "../models/tokenSchema.js"
import { User } from "../models/userSchema.js"

export class UserController {
  userRegist = async (req, res) => {
    const member = { ...req.body }
    const prefer = member.prefer
    const resident = member.personal.split("-")[0] + "-" + "******" // 주민번호 암호화
    const memberPhone = await Token.findOne({ phone: member.phone })
    const emailIsValid = checkValidationEmail(member.email)
    if (memberPhone === null) {
      res.status(422).send("핸드폰 번호를 확인해주세요.")
    }
    if (memberPhone.isAuth === false) {
      res.status(422).send("인증번호가 틀렸습니다.")
    } else {
      const og = await scrapingOG(prefer)
      const newUser = new User({
        name: member.name,
        email: member.email,
        personal: resident,
        prefer: member.prefer,
        pwd: member.pwd,
        phone: member.phone,
        og: og,
      })
      await newUser.save()

      if (emailIsValid) {
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(member)

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(member.email, mytemplate)
      }
      res.send(newUser._id)
    }
  }
  userFetch = async (_, res) => {
    const result = await User.find()
    res.send(result)
  }
}
