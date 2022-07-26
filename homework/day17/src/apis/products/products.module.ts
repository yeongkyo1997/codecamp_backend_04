import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  // graphql과 관련
  imports: [
    TypeOrmModule.forFeature([
      // 주입될 데이터를 입력
      Product,
    ]),
  ],

  // restapi와 관련

  // 의존성과 관련
  providers: [
    ProductsResolver, //
    ProductsService, //
  ],
})
export class ProductsModule {}
