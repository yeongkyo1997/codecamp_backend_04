export class CouponController {
  constructor(moneyService) {
    this.moneyService = moneyService
  }
  buyCoupon = (req, res) => {
    // 1. 가진 돈 검증하는 코드
    // const cashService = new CashService() => 강한 결합을 가지게 되므로 이렇게 하면 안됨
    const hasMoney = this.moneyService.checkValue()

    // 2. 쿠폰 구매하는 코드
    if (hasMoney) {
      res.send("쿠폰 구매 완료!!!")
    }
  }
}
