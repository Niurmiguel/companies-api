import { Module } from '@nestjs/common';
import { BusinessCreate } from './create';
import { BusinessGet } from './getAll';
import { BusinessGetById } from './getById';
import { BusinessUpdate } from './update';
import { BusinessDelete } from './delete';
import { BusinessRepositoryModule } from '@persistence/business/businessRepository.module';

@Module({
  imports: [BusinessRepositoryModule],
  providers: [
    BusinessCreate,
    BusinessGet,
    BusinessGetById,
    BusinessUpdate,
    BusinessDelete,
  ],
  exports: [
    BusinessCreate,
    BusinessGet,
    BusinessGetById,
    BusinessUpdate,
    BusinessDelete,
  ],
})
export class BusinessModule {}
