// public, private, protected

// 1. public
// class Aaa1 {
//   constructor(public mypower) {
//     // this.mypower = mypower // public, private, protected, readonly 등 1개만 포함되면 자동으로 셋팅됨!
//   }
//   ggg() {
//     console.log(this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 가능
//   }
// }

// class Aaa2 extends Aaa1 {
//   ggg() {
//     console.log(this.mypower) // 자식이 접근 가능
//     this.mypower = 10 // 자식이 수정 가능
//   }
// }
// const aaa = new Aaa2(50)
// console.log(aaa.mypower)
// aaa.mypower = 10

/**
 *
 *
 *
 *
 *
 *
 */

// 2. protected
// class Aaa1 {
//   constructor(protected mypower) {
//     // this.mypower = mypower // public, private, protected, readonly 등 1개만 포함되면 자동으로 셋팅됨!
//   }
//   ggg() {
//     console.log(this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 가능
//   }
// }

// class Aaa2 extends Aaa1 {
//   ggg() {
//     console.log(this.mypower) // 자식이 접근 가능
//     this.mypower = 10 // 자식이 수정 가능
//   }
// }
// const aaa = new Aaa2(50) // 외부에서 접근 불가능
// console.log(aaa.mypower)
// aaa.mypower = 10 // 외부에서 수정 불가능

/**
 *
 *
 *
 *
 *
 */

// 4. private
// class Aaa1 {
//   constructor(private mypower) {
//     // this.mypower = mypower // public, private, protected, readonly 등 1개만 포함되면 자동으로 셋팅됨!
//   }
//   ggg() {
//     console.log(this.mypower) // 안에서 접근 가능
//     this.mypower = 10 // 안에서 수정 가능
//   }
// }

// class Aaa2 extends Aaa1 {
//   ggg() {
//     console.log(this.mypower) // 자식이 접근 불가능
//     this.mypower = 10 // 자식이 수정 불가능
//   }
// }
// const aaa = new Aaa2(50) // 외부에서 접근 불가능
// console.log(aaa.mypower)
// aaa.mypower = 10 // 외부에서 수정 불가능

/**
 *
 *
 *
 *
 *
 *
 */

// 5. readonly
class Aaa1 {
  constructor(readonly mypower) {
    // this.mypower = mypower // public, private, protected, readonly 등 1개만 포함되면 자동으로 셋팅됨!
  }
  ggg() {
    console.log(this.mypower) // 안에서 접근 가능
    this.mypower = 10 // 안에서 수정 불가능
  }
}

class Aaa2 extends Aaa1 {
  ggg() {
    console.log(this.mypower) // 자식이 접근 가능
    this.mypower = 10 // 자식이 수정 불가능
  }
}
const aaa = new Aaa2(50) // 외부에서 접근 가능
console.log(aaa.mypower)
aaa.mypower = 10 // 외부에서 수정 불가능
