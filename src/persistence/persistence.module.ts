import { BusinessModule } from '@domain/business/business.module';
import { LanguagesModule } from '@domain/languages/languages.module';
import { PaymentMethodsModule } from '@domain/paymentMethods/paymentMethods.module';
import { Module } from '@nestjs/common';
import { CategoryRepositoryModule } from './categories/categoryRepository.module';
import { UserRepositoryModule } from './user/user.repository.module';

@Module({
  imports: [
    UserRepositoryModule,
    CategoryRepositoryModule,
    LanguagesModule,
    PaymentMethodsModule,
    BusinessModule,
  ],
  exports: [
    UserRepositoryModule,
    CategoryRepositoryModule,
    LanguagesModule,
    PaymentMethodsModule,
    BusinessModule,
  ],
})
export class PersistenceModule {}
