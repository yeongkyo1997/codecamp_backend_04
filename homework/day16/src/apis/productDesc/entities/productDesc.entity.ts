import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductDesc {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne(() => Product)
  id: string;

  @Column()
  description: string;
}
