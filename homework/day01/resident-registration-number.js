import { checkValidation, hideResident } from "./resident.js";

const customRegistrationNumber = resident => {
	let first;
	let second;
	// -을 기준으로 숫자분리
	let sperNum = resident.split("-");
	let result;

	if (resident.includes("-") === false) {
		console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
		return;
	}

	first = sperNum[0];
	second = sperNum[1];

	// 올바른 정보가 입력됐는지 체크
	if (checkValidation(first, second) === false) {
		return;
	}
	// 정보숨기기
	result = hideResident(first, second);

	// 결과출력
	console.log(result);
};

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");
