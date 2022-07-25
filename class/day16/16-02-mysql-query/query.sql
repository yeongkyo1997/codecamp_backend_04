show databases
;

use mydocker04
;

show tables
;

desc product
;

SELECT *
  FROM product
;

-- 레코드 추가
INSERT into product(id, name, description, price, isSoldout)
     values(uuid(), "마우스", "정말 좋은 마우스입니다!!!", 119000, false)
;
INSERT into product(id, name, description, price, isSoldout)
     values(uuid(), "맥북", "최신 맥북", 20000, false)
;

SELECT *
  FROM product_saleslocation
;

INSERT into product_saleslocation(id, address, addressDetail, lat, lng, meetingTime)
     values(uuid(), "구로구", "구로디지털단지", "0.0", "0.0", "2022-12-31")
;

UPDATE product
   set price = 119000
 WHERE name = '마우스'
;

UPDATE product 
   set productSaleslocationId = '2c76f703-0bf1-11ed-b70c-0242ac120002'
 WHERE name = '마우스'
;

SELECT *
  FROM  product
;

-- 최종 연결
SELECT p.id, p.name, p.price, ps.address, ps.addressDetail as '상세주소'
  FROM product p, product_saleslocation ps 
 WHERE p.productSaleslocationId = ps.id 
;

-- 추가기능들 - 1
UPDATE product
   set isSoldout = TRUE 
 WHERE name = '맥북'
   and price = 20000
;

-- 추가기능들 - 2
UPDATE product
   set price = 5000
 WHERE name = '마우스'
    OR name = '맥북'
;