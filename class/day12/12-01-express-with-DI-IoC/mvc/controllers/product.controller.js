export class ProductController {
  // 의존성을 주입받기 위한 생성자
  constructor(moneyService, productService) {
    this.moneyService = moneyService
    this.productService = productService
  }
  buyProduct = () => {
    // 1. 가진돈 검증하는 코드 (대락 10줄 => 2줄)
    // const cachService = new CashService() => 강한 결합을 가지게 되므로 이렇게 하면 안됨
    const hasMoney = this.moneyService.checkValue()

    // 2. 판매여부 검증하는 코드 (대략 10줄 정도 작성)
    // const productService = new ProductService() => 강한 결합을 가지게 되므로 이렇게 하면 안됨
    const isSoldout = this.productService.checkSoldout()

    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("상품 구매 완료!!!")
    }
  }

  refundProduct = () => {
    // 1. 판매여부 검증하는 코드 (위에서 복사해온다) 
    // const productService = new ProductService() => 강한 결합을 가지게 되므로 이렇게 하면 안됨
    const isSoldout = this.productService.checkSoldout()
    //
    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료!!!")
    }
  }
}
