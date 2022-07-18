const aaa = new Date()
console.log(aaa.getFullYear())
console.log(aaa.getMonth() + 1)

class Monster {
  // 생성자 함수
  constructor(power) {
    this.power = power
  }
  attack() {
    console.log("공격하자!!!")
    console.log(`내 공격력은 ${this.power}야`)
  }
  run = () => {
    console.log("도망가자!!!")
  }
}

const myMonster1 = new Monster(10)
myMonster1.run()
myMonster1.attack()

const myMonster2 = new Monster(50)
myMonster2.attack()
myMonster2.run()
