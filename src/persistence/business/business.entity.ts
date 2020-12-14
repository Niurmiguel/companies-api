import CategoryEntity from '@persistence/categories/category.entity';
import LanguageEntity from '@persistence/languages/language.entity';
import PaymentMethodEntity from '@persistence/paymentMethods/paymentMethod.entity';
import ScheduleEntity from '@persistence/schedule/schedule.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class BusinessEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public country: string;

  @Column()
  public city: string;

  @Column()
  public zip_code: number;

  @Column()
  public address: string;

  @Column()
  public phone: string;

  @Column('varchar', { array: true })
  public tags: string[];

  @Column()
  public website: string;

  @ManyToMany(
    () => CategoryEntity,
    (category: CategoryEntity) => category.business,
  )
  @JoinTable()
  public categories: CategoryEntity[];

  @ManyToMany(
    () => PaymentMethodEntity,
    (payment_methods: PaymentMethodEntity) => payment_methods.business,
  )
  @JoinTable()
  public payment_methods: PaymentMethodEntity[];

  @ManyToMany(
    () => ScheduleEntity,
    (schedule: ScheduleEntity) => schedule.business,
  )
  @JoinTable()
  public schedule: ScheduleEntity[];

  @ManyToMany(
    () => LanguageEntity,
    (language: LanguageEntity) => language.business,
  )
  @JoinTable()
  public languages: LanguageEntity[];

  @Column()
  public logo: string;
}

export default BusinessEntity;
