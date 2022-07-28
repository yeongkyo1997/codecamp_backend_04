import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
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
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => String)
  level: string;

  @Column()
  @Field(() => Float)
  starRate: number;

  @Column()
  @Field(() => Boolean)
  isDiploma: boolean;

  @JoinColumn()
  @OneToOne(() => ProductDesc)
  productDesc: ProductDesc;

  @ManyToOne(() => SubCategory)
  subCategory: SubCategory;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Payment)
  payment: Payment;

  @JoinTable()
  @ManyToMany(() => Tag, (tags) => tags.products)
  tags: Tag[];
}
