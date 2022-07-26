import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // 조회 서비스
  findAll() {
    return this.productRepository.find(); // 전체 다 찾는 함수
  }

  findOne({ productId }) {
    return this.productRepository.findOne({ where: { id: productId } }); // where에 조건을 입력해서 튜플을 찾는 함수
  }

  async create({ createProductInput }) {
    const result = await this.productRepository.save({
      // isSoldout: false, // 디폴트값

      // 하나하나 직접 나열하는 방식
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,

      // 스프레드 연산자를 활용해서 한번에 저장
      ...createProductInput,
    });

    return result; // 실무에서는 바로 결과를 리턴해준다. (결과값이 없으면 error)
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
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
}
