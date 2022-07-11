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
 *                    example: 철수
 *                  phone:
 *                    type: string
 *                    example: 010-1234-5678
 *                  personal:
 *                    type: string
 *                    example: 220110-2222222
 *                  prefer:
 *                    type: string
 *                    example: https://naver.com
 */
