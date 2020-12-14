import { Provider } from '@nestjs/common';
import { PaymentMethodRepository } from './repository';

export const PaymentMethodRepoProvider: Provider = {
  provide: 'PaymentMethodRepo',
  useClass: PaymentMethodRepository,
};
