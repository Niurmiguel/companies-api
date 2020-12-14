import { Provider } from '@nestjs/common';
import { BusinessRepository } from './repository';

export const BusinessRepoProvider: Provider = {
  provide: 'BusinessRepo',
  useClass: BusinessRepository,
};
