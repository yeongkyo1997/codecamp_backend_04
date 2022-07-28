import { Field, ObjectType } from '@nestjs/graphql';
import { PayMethod } from 'src/apis/payMethod/entities/payMethod.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinColumn()
  @OneToOne(() => PayMethod)
  @Field(() => PayMethod)
  payMethod: PayMethod;
}
