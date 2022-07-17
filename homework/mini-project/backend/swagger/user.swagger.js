/**
 * @swagger
 * /users:
 *      get:
 *          summary: 회원목록 조회
 *          tags: [User]
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
 *                                      name:
 *                                          type: string
 *                                          example: 인영교
 *                                      email:
 *                                          type: string
 *                                          example: abc123@gmail.com
 *                                      personal:
 *                                          type: string
 *                                          example: 970101-1234567
 *                                      pwd:
 *                                          type: string
 *                                          example: 1234**
 *                                      phone:
 *                                          type: string
 *                                          example: "01012341234"
 *                                      prefer:
 *                                          type: string
 *                                          example: https://www.naver.com
 *                                      og:
 *                                          type: object
 *                                          properties:
 *                                              title:
 *                                                  type: string
 *                                                  example: 네이버
 *                                              description:
 *                                                  type: string
 *                                                  example: 네이버입니다~
 *                                              imageURL:
 *                                                  type: string
 *                                                  example: "naver.jpg"
 */

/**
 * @swagger
 * /user:
 *       post:
 *          summary: 회원가입하기
 *          tags: [User]
 *          requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      name:
 *                                          type: string
 *                                          example: 인영교
 *                                      email:
 *                                          type: string
 *                                          example: abcd@gmail.com
 *                                      personal:
 *                                          type: string
 *                                          example: 970606-1234567
 *                                      prefer:
 *                                          type: string
 *                                          example: https://www.naver.com
 *                                      pwd:
 *                                          type: string
 *                                          example: 123466
 *                                      phone:
 *                                          type: string
 *                                          example: "01012341234"
 *
 *
 *
 *          responses:
 *              200:
 *                  description: id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: string
 *                              example: 628cc97cf8870b04b2218a3e
 */
