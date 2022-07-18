/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 스타벅스 커피 목록 조회
 *          tags: [Starbucks]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: "62d3df47280f87c18e97ffac"
 *
 *                                      name:
 *                                          type: string
 *                                          example: "에스프레소 콘 파나"
 *                                      img:
 *                                          type: string
 *                                          example: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg"
 *                                      __v:
 *                                          type: number
 *                                          example: 0
 */
