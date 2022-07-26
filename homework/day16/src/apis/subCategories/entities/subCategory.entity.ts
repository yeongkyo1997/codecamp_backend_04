import { MainCategory } from 'src/apis/mainCategories/entities/mainCategory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // 메인카테고리 연결
  @ManyToOne(() => MainCategory)
  mainCategory: MainCategory;
}
