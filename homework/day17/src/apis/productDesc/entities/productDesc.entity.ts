import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductDesc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;
}
