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
import { ProductController } from "./controllers/product.controller.js"

const app = express()

const productController = new ProductController()

// 상품 API
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰 구매 API

app.listen(3000, () => {
  console.log("서버가 켜졌습니다.")
})
