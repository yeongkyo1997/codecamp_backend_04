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
import { BoardController } from "./mvc/controllers/board.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CashService } from "./mvc/controllers/services/cash.service.js"
import { PointService } from "./mvc/controllers/services/poiint.service.js"
import { ProductService } from "./mvc/controllers/services/product.service.js"

const app = express()
app.use(express.json())

// 서비스 의존성들
const cashService = new CashService() // 싱글톤 패턴
const productService = new ProductService() // 싱글톤 패턴
const pointService = new PointService() // 싱글톤 패턴

// 상품 API
const productController = new ProductController(cashService, productService) // 의존성 주입을 통한 인스턴스 생성
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰(상품권) API
const couponController = new CouponController(pointService) // 의존성 주입을 통한 인스턴스 생성
app.post("/coupons/buy", couponController.buyCoupon) // 쿠폰(상품권) 구매하기

// 게시판 API
const boardController = new BoardController()
app.get("/boards", boardController.fetchBoards) // 게시판 조회
app.post("/boards", boardController.createBoard) // 게시판 등록

app.listen(3000, () => {
  console.log("서버가 켜졌습니다.")
})
