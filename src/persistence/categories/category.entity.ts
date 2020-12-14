import BusinessEntity from '@persistence/business/business.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class CategoryEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public points: number;

  @ManyToMany(
    () => BusinessEntity,
    (business: BusinessEntity) => business.categories,
  )
  public business: BusinessEntity[];
}

export default CategoryEntity;
