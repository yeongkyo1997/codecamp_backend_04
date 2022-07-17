/**
 * @swagger
 * /users:
 *   get:
 *     summary: 사용자 리스트 가져오기
 *     tags: [users]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                properties:
 *                  number:
 *                    type: int
 *                    example: 1
 *                  email:
 *                    type: string
 *                    example: aaa@gmail.com
 *                  name:
 *                    type: string
 *                    example: 인영교
 *                  phone:
 *                    type: string
 *                    example: 01011111111
 *                  personal:
 *                    type: string
 *                    example: 220110-2222222
 *                  prefer:
 *                    type: string
 *                    example: https://naver.com
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
 *                                          example: abc@gmail.com
 *                                      personal:
 *                                          type: string
 *                                          example: 101010-1111111
 *                                      prefer:
 *                                          type: string
 *                                          example: https://www.goole.com
 *                                      pwd:
 *                                          type: string
 *                                          example: 123
 *                                      phone:
 *                                          type: string
 *                                          example: "01011111111"
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

/**
 * @swagger
 * /tokens/phone:
 *       post:
 *          summary: 토큰 발급
 *          tags: [Token]
 *          requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      phone:
 *                                          type: string
 *                                          example: "01011111111"
 *
 *
 *
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: 토큰 발급되었습니다.
 */
