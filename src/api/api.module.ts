import { DomainModule } from '@domain/domain.module';
import { Module } from '@nestjs/common';
import CategoriesController from './categories/categories.controller';
import LanguagesController from './languages/languages.controller';
import PaymentMethodsController from './paymentMethod/paymentMethods.controller';
import ScheduleController from './schedule/schedule.controller';
import BusinessController from './business/business.controller';

@Module({
  imports: [DomainModule],
  controllers: [
    CategoriesController,
    LanguagesController,
    PaymentMethodsController,
    ScheduleController,
    BusinessController,
  ],
})
export class ApiModule {}
