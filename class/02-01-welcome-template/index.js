const apple = 3;
const banana = 2;

console.log("철수는 사과를 " + apple + "개, " + banana + "개 가지고 있습니다.");
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);

function getWelcomTemplate() {
  // 철수님 가입해주셔서 감사합니다!!
  // 이름 : 철수
  // 나이 : 13
  // 학교 : 다람쥐초등학교
  // 가입일 : 2020-01-01
  const mytemplate = `
    <html>
      <body>
        <h1>철수님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름 : 철수</div>
        <div>나이 : 13</div>
        <div>학교 : 다람쥐초등학교</div>
        <div>가입일 : 2022-07-05</div>
      </body>
    </html>
  `;
  console.log(mytemplate);
}
getWelcomTemplate();
