import { Module } from '@nestjs/common';
import { PaymentMethodCreate } from './create';
import { PaymentMethodGet } from './getAll';
import { PaymentMethodGetById } from './getById';
import { PaymentMethodUpdate } from './update';
import { PaymentMethodDelete } from './delete';
import { PaymentMethodRepositoryModule } from '@persistence/paymentMethods/paymentMethodRepository.module';

@Module({
  imports: [PaymentMethodRepositoryModule],
  providers: [
    PaymentMethodCreate,
    PaymentMethodGet,
    PaymentMethodGetById,
    PaymentMethodUpdate,
    PaymentMethodDelete,
  ],
  exports: [
    PaymentMethodCreate,
    PaymentMethodGet,
    PaymentMethodGetById,
    PaymentMethodUpdate,
    PaymentMethodDelete,
  ],
})
export class PaymentMethodsModule {}
