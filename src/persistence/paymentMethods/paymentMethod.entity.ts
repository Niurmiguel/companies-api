import BusinessEntity from '@persistence/business/business.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class PaymentMethodEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToMany(
    () => BusinessEntity,
    (business: BusinessEntity) => business.payment_methods,
  )
  public business: BusinessEntity[];
}

export default PaymentMethodEntity;
