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
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  payAmount: number;

  @Column()
  paymentDate: Date;

  @ManyToOne(() => User)
  user: User;

  @JoinColumn()
  @OneToOne(() => PayMethod)
  payMethod: PayMethod;
}