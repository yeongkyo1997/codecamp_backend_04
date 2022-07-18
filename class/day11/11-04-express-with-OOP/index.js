/**
 * 1. class를 활용한 효율적인 API 만들기
 * 2. 실무적인 폴도구조 만들기(MVC패턴)
 * 3. express의 노가다 알아보기
 * 4. DI(의존성주입) 이해하기
 */

/**
 * API 목록
 * 1. 상품 구매 API
 * 2. 상품 환불 API
 * 3. 쿠폰 구매 API
 */
import express from "express"
import { CashService } from "./cash.js"
import { ProductService } from "./product.js"

const app = express()

// 상품 구매 API
app.post("/products/buy", (req, res) => {
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
})

// 상품 환불 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (위에서 복사해온다)
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()
  //
  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("상품 환불 완료!!!")
  }
})

// 쿠폰 구매 API

app.listen(3000, () => {
  console.log("서버가 켜졌습니다.")
})
