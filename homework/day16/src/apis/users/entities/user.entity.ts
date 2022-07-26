import { Payment } from 'src/apis/payments/entities/payment.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  description: string;

  // 결제 연결
  @ManyToOne(() => Payment)
  payment: Payment;
}
