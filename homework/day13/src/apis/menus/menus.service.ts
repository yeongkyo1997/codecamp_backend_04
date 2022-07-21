import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    return [
      {
        name: '나이트로 바닐라 크림',
        price: 7800,
        kcal: 80,
        fat: 2,
        protein: 1,
        Na: 40,
        sugar: 10,
        caffeine: 232,
      },
      {
        name: '나이트로 콜드 브루',
        price: 7000,
        kcal: 5,
        fat: 0,
        protein: 0,
        Na: 5,
        sugar: 0,
        caffeine: 245,
      },
      {
        name: '돌체 콜드 브루',
        price: 7000,
        kcal: 265,
        fat: 9,
        protein: 8,
        Na: 130,
        sugar: 29,
        caffeine: 150,
      },
      {
        name: '바닐라 크림 콜드 브루',
        price: 7000,
        kcal: 125,
        fat: 6,
        protein: 3,
        Na: 58,
        sugar: 1,
        caffeine: 150,
      },
      {
        name: '벨벳 다크 모카 나이트로',
        price: 7000,
        kcal: 150,
        fat: 6,
        protein: 2,
        Na: 15,
        sugar: 17,
        caffeine: 190,
      },
    ];
  }

  create() {
    return '메뉴 등록에 성공했습니다!';
  }
}
