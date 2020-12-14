import { Module } from '@nestjs/common';
import { CategoryRepositoryModule } from '@persistence/categories/categoryRepository.module';
import { CatCreate } from './create';
import { CatGet } from './getAll';
import { CatGetById } from './getById';
import { CatUpdate } from './update';
import { CatDelete } from './delete';

@Module({
  imports: [CategoryRepositoryModule],
  providers: [CatCreate, CatGet, CatGetById, CatUpdate, CatDelete],
  exports: [CatCreate, CatGet, CatGetById, CatUpdate, CatDelete],
})
export class CategoriesModule {}
