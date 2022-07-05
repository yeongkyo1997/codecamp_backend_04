import { getToday } from "./utils.js";
export function getWelcomTemplate({ name, age, school, createdAt }) {
  const mytemplate = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름 : ${name}</div>
        <div>나이 : ${age}</div>
        <div>학교 : ${school}</div>
        <div>가입일 : ${getToday()}</div>
      </body>
    </html>
  `;
  return mytemplate;
}

export function sendTemplateToEmail({ email, template }) {
  console.log(`${email} 주소로 가입환영 템플릿 ${template}을 전송합니다!!!`);
}

export function checkValidationEmail({ email }) {
  if (email.includes("@") === false || email === undefined) {
    console.log("에러발생!!! 이메일이 잘못입력됐습니다!!!");
    return false;
  }
  return true;
}
