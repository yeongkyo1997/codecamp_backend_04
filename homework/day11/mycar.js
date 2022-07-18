class Mycar {
  model
  power
  color

  constructor(model, power, color) {
    this.model = model
    this.power = power
    this.color = color
  }

  start() {
    console.log(`${this.model} is started`)
  }

  stop() {
    console.log(`${this.model} is stopped`)
  }

  printPower() {
    console.log(`${this.model} has ${this.power} hp`)
  }

  printColor() {
    console.log(`${this.model} is ${this.color}`)
  }
}

const mycar = new Mycar("밴츠", 100, "red")
mycar.start()
mycar.stop()
mycar.printPower()
mycar.printColor()
