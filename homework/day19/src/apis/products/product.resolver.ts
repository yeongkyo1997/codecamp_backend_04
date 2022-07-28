import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService, //
  ) {}

  //////////////////////////////// QUERY ////////////////////////////////
  // 전체 조회
  @Query(() => [Product])
  fetchProducts() {
    return this.productService.findAll();
  }

  // 하나만 조회
  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  @Query(() => [Product])
  fetchProductWithDeleted() {
    return this.productService.findWithDelete();
  }

  //////////////////////////////// MUTATION ////////////////////////////////
  // 생성
  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') //
    createProductInput: CreateProductInput, //
  ) {
    return this.productService.create({ createProductInput });
  }

  // 수정
  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') //
    updateProductInput: UpdateProductInput,
  ) {
    await this.productService.checkSale({ productId });

    return this.productService.update({ productId, updateProductInput });
  }

  // 삭제
  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }

  // 삭제된 상품 복구
  @Mutation(() => Boolean)
  restoreProduct(@Args('productId') productId: string) {
    return this.productService.retoreDeleted({ productId });
  }
}
