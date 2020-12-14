import { Module } from '@nestjs/common';
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
  ],
  exports: [
    UserModule,
    CategoriesModule,
    LanguagesModule,
    ScheduleModule,
    PaymentMethodsModule,
  ],
})
export class DomainModule {}
