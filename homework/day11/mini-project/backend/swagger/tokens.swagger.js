/**
 * @swagger
 * /tokens/phone:
 *  post:
 *      summary: 토큰발급
 *      tags: [Tokens]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          phone:
 *                              type: string
 *                              example: "01085261375"
 *
 *
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: 토큰 발급되었습니다.
 *
 */

/**
 * @swagger
 * /tokens/phone:
 *      patch:
 *          summary: 토큰 검증
 *          tags: [Tokens]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  example: "01085261375"
 *                              token:
 *                                  type: string
 *                                  example: "128376"
 *
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: boolean
 *                              example: true
 *
 */
