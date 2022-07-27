import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}

  // 조회 서비스
  findAll() {
    return this.productRepository.find({
      relations: ['productSaleslocation'],
    }); // 전체 다 찾는 함수
  }

  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation'],
    }); // where에 조건을 입력해서 튜플을 찾는 함수
  }

  async create({ createProductInput }) {
    // // 1. 상품만 등록하는 경우
    // const result = await this.productRepository.save({
    //   // isSoldout: false, // 디폴트값

    //   // 하나하나 직접 나열하는 방식
    //   // name: createProductInput.name,
    //   // description: createProductInput.description,
    //   // price: createProductInput.price,

    //   // 스프레드 연산자를 활용해서 한번에 저장
    //   ...createProductInput,
    // });

    // 2. 상품 및 상품 거래위치를 같이 등록하는 경우
    const { productSaleslocation, ...product } = createProductInput;

    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    const result2 = this.productRepository.save({
      ...product,
      // productSaleslocation: result.id, => 질문
      productSaleslocation: {
        ...result,
      },
    });

    return result2; // 실무에서는 바로 결과를 리턴해준다. (결과값이 없으면 error)
  }

  async update({ productId, updateProductInput }) {
    // 수정만 할때 사용
    // this.productRepository.update({ id: productId }, { ...updateProductInput });

    // 수정 후 결과값까지 받을 때 사용
    const myproduct = await this.productRepository.findOne({
      where: { id: productId },
    });

    const result = this.productRepository.save({
      ...myproduct,
      id: productId,
      ...updateProductInput,
    });

    return result;
  }

  async checksoldout({ productId }) {
    try {
      const product = await this.productRepository.findOne({
        where: { id: productId },
      });
      console.log(product);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    } // 예외처리

    //
    //
    //
    // if (product.isSoldout) {
    //   throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    // }
  }

  async delete({ productId }) {
    // 1. 실제 DB에서 삭제하는 방법
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false; // 삭제 성공여부
    //
    // 2. 소프트 삭제(직접 구현) - isDeleted를 true로 바꿔주면서 삭제된 상태로 저장
    // this.productRepository.update({ id: productId }, { isDeleted: true });
    //
    // 3. 소프트 삭제(직접 구현) - deletedAt을 사용하는 방법
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });  // 삭제 시간 저장, 삭제 시간을 저장하는 필드를 추가해야 한다.
    //
    // 4. 소프트 삭제(TypeORM 제공) - typeorm에서 제공하는 softRemove를 사용하는 방법
    // await this.productRepository.softRemove({ id: productId });
    //
    // 5. 소프트 삭제(TypeORM 제공) - typeorm에서 제공하는 softDelete를 사용하는 방법
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false; // 삭제 성공여부
  }
}
