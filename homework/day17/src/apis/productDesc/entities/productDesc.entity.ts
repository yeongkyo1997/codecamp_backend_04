import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductDesc {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne(() => Product)
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  description: string;
}
