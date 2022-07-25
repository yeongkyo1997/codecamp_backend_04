import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid') // uuid는 중복되지 않는 아이디 값
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;

  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinColumn() // 기준이 되는 테이블의 컬럼에 써준다!!!!, 기준이 없기 때문에!!!!
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @JoinTable()
  @ManyToMany(() => ProductTag, () => (productTags) => productTags.products)
  productTags: ProductTag[];
}
