import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PayMethod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
