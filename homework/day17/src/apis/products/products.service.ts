import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  // 전체조회
  async findAll() {
    return await this.productsRepository.find();
  }

  // 하나만 조회
  async findOne({ productId }) {
    return await this.productsRepository.findOne({ where: { id: productId } });
  }

  async create({ createProductInput }) {
    const result = await this.productsRepository.save({
      ...createProductInput,
    });
    return result;
  }

  // 상품 수정
  async update({ productId, updateProductInput }) {
    const myproduct = await this.productsRepository.findOne({
      where: { id: productId },
    });

    const result = this.productsRepository.save({
      ...myproduct,
      id: productId,
      ...updateProductInput,
    });

    return result;
  }
}
