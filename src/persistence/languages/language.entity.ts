import BusinessEntity from '@persistence/business/business.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class LanguageEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public language: string;

  @ManyToMany(
    () => BusinessEntity,
    (business: BusinessEntity) => business.languages,
  )
  public business: BusinessEntity[];
}

export default LanguageEntity;
