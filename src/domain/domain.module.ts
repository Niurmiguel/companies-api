import { Module } from '@nestjs/common';
import { BusinessModule } from './business/business.module';
import { CategoriesModule } from './categories/categories.module';
import { LanguagesModule } from './languages/languages.module';
import { PaymentMethodsModule } from './paymentMethods/paymentMethods.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CategoriesModule,
    LanguagesModule,
    ScheduleModule,
    PaymentMethodsModule,
    BusinessModule,
  ],
  exports: [
    UserModule,
    CategoriesModule,
    LanguagesModule,
    ScheduleModule,
    PaymentMethodsModule,
    BusinessModule,
  ],
})
export class DomainModule {}
