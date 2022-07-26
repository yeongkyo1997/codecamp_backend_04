import { Field, ObjectType } from '@nestjs/graphql';
import { PayMethod } from 'src/apis/payMethod/entities/payMethod.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Number)
  totalPrice: number;

  @Column()
  @Field(() => Date)
  date: Date;

  // 결제수단 연결
  @JoinColumn()
  @OneToOne(() => PayMethod)
  @Field(() => PayMethod)
  payMethod: PayMethod;
}
