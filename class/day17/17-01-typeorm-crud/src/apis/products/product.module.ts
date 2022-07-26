import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  // graphql과 관련
  imports: [
    TypeOrmModule.forFeature([
      // 주입될 데이터를 입력
      Product,
    ]),
  ],

  // restapi와 관련
  controllers: [],

  // 의존성과 관련
  providers: [
    ProductResolver, //
    ProductService,
  ],
})
export class ProductModule {}
