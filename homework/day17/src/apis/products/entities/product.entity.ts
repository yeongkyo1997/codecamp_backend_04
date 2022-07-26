import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Payment } from 'src/apis/payments/entities/payment.entity';
import { ProductDesc } from 'src/apis/productDesc/entities/productDesc.entity';
import { SubCategory } from 'src/apis/subCategories/entities/subCategory.entity';
import { Tag } from 'src/apis/tags/entities/tag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Number)
  price: number;

  @Column()
  @Field(() => String)
  level: string;

  @Column({ unsigned: true })
  @Field(() => Float)
  starRate: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isDiploma: boolean;

  // 설명
  @JoinColumn()
  @OneToOne(() => ProductDesc)
  @Field(() => ProductDesc)
  productDesc: ProductDesc;

  // 서브카테고리
  @ManyToOne(() => SubCategory)
  @Field(() => SubCategory)
  subCategory: SubCategory;

  // 유저
  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  // 결제
  @ManyToOne(() => Payment)
  @Field(() => Payment)
  payment: Payment;

  // 태그
  @JoinTable()
  @ManyToMany(() => Tag, (tags) => tags.products)
  @Field(() => [Tag])
  tags: Tag[];

  // 상품설명
  @OneToOne(() => ProductDesc)
  @Field(() => ProductDesc)
  description: ProductDesc;
}
