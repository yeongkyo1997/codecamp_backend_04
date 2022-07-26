import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  // 전체조회
  @Query(() => [Product])
  getProducts() {
    return this.productsService.findAll();
  }

  // 하나만 조회
  @Query(() => Product)
  getProduct(@Args('productId') productId: string) {
    return this.productsService.findOne({ productId });
  }

  // 새로운 카테고리를 생성하는 API
  @Mutation(() => Product)
  async createProducts(
    @Args('productId') productId: string,
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return await this.productsService.create({
      createProductInput: CreateProductInput,
    });
  }
}
