function printTemplate({ name, email, resident, phone, site }) {
  const mytemplate = `
        <html>
          <body>
            <h1>${name}님 가입을 환영합니다.</h1>
            <hr>
            <div>이메일: ${email}</div>
            <div>주민번호: ${resident}</div>
            <div>휴대폰 번호: ${phone}</div>
            <div>내가 좋아하는 사이트 : ${site}</div>
        </body>
      </html>
    `
  return mytemplate
}

const name = "yeongkyo"
const email = "yeongkyo1997@gmail.com"
const resident = "970606-1******"
const phone = "010-8526-1375"
const site = "google.com"

console.log(printTemplate({ name, email, resident, phone, site }))
