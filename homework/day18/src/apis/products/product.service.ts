import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // query
  findAll() {
    return this.productRepository.find({
      relations: ['subCategory', 'user', 'payment'],
    });
  }

  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId }, //
      relations: ['subCategory', 'user', 'payment'],
    });
  }

  findWithDelete() {
    return this.productRepository.find({
      withDeleted: true,
      relations: ['subCategory', 'user', 'payment'],
    });
  }

  // mutation
  async create({ createProductInput }) {
    const { subCategoryId, userId, paymentId, ...product } = createProductInput;
    const result = await this.productRepository.save({
      ...product,
      subCategory: { id: subCategoryId },
      user: { id: userId },
      payment: { id: paymentId },
    });

    return result;
  }

  async update({ productId, updateProductInput }) {
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

  async checkSale({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.price === -1) {
      throw new UnprocessableEntityException('준비중인 상품입니다.');
    }
  }

  async delete({ productId }) {
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }

  async retoreDeleted({ productId }) {
    const result = await this.productRepository.restore(
      { id: productId }, //
    );
    return result.affected ? true : false;
  }
}
