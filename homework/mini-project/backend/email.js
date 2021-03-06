import nodemailer from "nodemailer"
import "dotenv/config.js"

export function checkValidationEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러 발생!!! 이메일을 제대로 입력해 주세요!!!")
    return false
  } else {
    return true
  }
}

export function getWelcomeTemplate({ name }) {
  const mytemplate = `
        <html>
            <body>
              <div style="display: flex; flex=direction: column; align-items: center;">
                <div style="width: 500px">
                  <h1 style="color: blue">${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div>${name}님 가입을 환영합니다!!!!!!!!!!!!</div>
                </div>
              </div>
            </body>
        </html>
    `
  return mytemplate
  // console.log(mytemplate)
}

export async function sendTemplateToEmail(myemail, result) {
  const EMAIL_USER = process.env.EMAIL_USER
  const EMAIL_PASS = process.env.EMAIL_PASS
  const EMAIL_SENDER = process.env.EMAIL_SENDER

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  const response = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: myemail,
    subject: "[미니프로젝트] 가입을 축하합니다!!!",
    html: result,
  })
  console.log(response)
  // console.log(myemail + "주소로 가입환영 템플릿" + result + "을 전송합니다!!!");
}
