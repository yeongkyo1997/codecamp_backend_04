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
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  level: string;

  @Column()
  starRate: number;

  @Column()
  isDiploma: boolean;

  // 설명
  @JoinColumn()
  @OneToOne(() => ProductDesc)
  productDesc: ProductDesc;

  // 서브카테고리
  @ManyToOne(() => SubCategory)
  subCategory: SubCategory;

  // 유저
  @ManyToOne(() => User)
  user: User;

  // 결제
  @ManyToOne(() => Payment)
  payment: Payment;

  // 태그
  @JoinTable()
  @ManyToMany(() => Tag, (tags) => tags.products)
  tags: Tag[];


  // 상품설명
  @OneToOne(() => ProductDesc)
  description: ProductDesc;
}
