import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodRepoProvider } from './paymentMethod.provider';
import PaymentMethodEntity from './paymentMethod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethodEntity])],
  providers: [PaymentMethodRepoProvider],
  exports: [PaymentMethodRepoProvider],
})
export class PaymentMethodRepositoryModule {}
