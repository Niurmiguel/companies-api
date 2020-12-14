import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryEntity from './category.entity';
import { CategoryRepoProvider } from './category.provider';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryRepoProvider],
  exports: [CategoryRepoProvider],
})
export class CategoryRepositoryModule {}
