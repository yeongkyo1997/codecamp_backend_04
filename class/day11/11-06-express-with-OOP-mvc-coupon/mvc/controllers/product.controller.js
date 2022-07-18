import { CashService } from "./services/cash.js"
import { ProductService } from "./services/product.js"

export class ProductController {
  buyProduct = () => {
    // 1. 가진돈 검증하는 코드 (대락 10줄 => 2줄)
    const cachService = new CashService()
    const hasMoney = cachService.checkValue()

    // 2. 판매여부 검증하는 코드 (대략 10줄 정도 작성)
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout()

    // 3. 상품 구매하는 코드

    if (hasMoney && !isSoldout) {
      res.send("상품 구매 완료!!!")
    }
  }

  refundProduct = () => {
    // 1. 판매여부 검증하는 코드 (위에서 복사해온다)
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout()
    //
    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료!!!")
    }
  }
}
