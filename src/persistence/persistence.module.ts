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
  ],
  exports: [
    UserRepositoryModule,
    CategoryRepositoryModule,
    LanguagesModule,
    PaymentMethodsModule,
  ],
})
export class PersistenceModule {}
