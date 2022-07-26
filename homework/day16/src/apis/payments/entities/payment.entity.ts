import { PayMethod } from 'src/apis/payMethod/entities/payMethod.entity';
import { Product } from 'src/apis/products/entities/product.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalPrice: number;

  @Column()
  date: Date;

  // 결제수단 연결
  @JoinColumn()
  @OneToOne(() => PayMethod)
  payMethod: PayMethod;
}
