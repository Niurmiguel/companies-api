import BusinessEntity from '@persistence/business/business.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class ScheduleEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public day: number;

  @Column()
  public open: string;

  @Column()
  public close: string;

  @ManyToMany(
    () => BusinessEntity,
    (business: BusinessEntity) => business.schedule,
  )
  public business: BusinessEntity[];
}

export default ScheduleEntity;
