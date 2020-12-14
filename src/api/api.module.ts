import { DomainModule } from '@domain/domain.module';
import { Module } from '@nestjs/common';
import CategoriesController from './categories/categories.controller';
import LanguagesController from './languages/languages.controller';

@Module({
  imports: [DomainModule],
  controllers: [CategoriesController, LanguagesController],
})
export class ApiModule {}
