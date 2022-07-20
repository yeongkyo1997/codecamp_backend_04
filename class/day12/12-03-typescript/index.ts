// 타입추론
let aaa = "안녕하세요"
// aaa = 3 // 에러

// 타입명시
let bbb: string = "안녕하세요"
// bbb = 3 // 에러

// 타입명시가 필요한 상황
let ccc: number | string = 1000
ccc = `${ccc}원`

//  숫자타입
let ddd: number = 3
// ddd = "안녕하세요" // 에러

// 불린타입
let eee: boolean = true
eee = false
// eee = "false" // 에러 => js에서는 true로 인식 빈문자열이 아니기 때문

// 배열타입
let fff: number[] = [1, 2, 3]
// fff = [1, 2, 3, "안녕하세요"] // 에러

let ggg: string[] = ["철수", "영희", "훈이"]
// ggg = ["철수", "영희", "훈이", 100] // 에러

let hhh: (string | number)[] = [1, 2, 3, "안녕하세요", "철수"]

// 객체타입
interface IProfile {
  name: string
  age: number | string
  school: string
  hobby?: string // 옵셔널 속성
}

const profile: IProfile = { name: "철수", age: 8, school: "다람쥐초등학교" }
profile.age = "8살"
// profile.hobby = "수영" // 에러

// 함수타입
const add = (money1: number, money2: number, unit: string): string => {
  return money1 + money2 + unit
}

// const result = add("100", "200", "원")  // 에러
const result = add(1000, 2000, "원")
