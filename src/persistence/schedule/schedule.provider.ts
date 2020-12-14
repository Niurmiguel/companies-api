import { Provider } from '@nestjs/common';
import { ScheduleRepository } from './repository';

export const ScheduleRepoProvider: Provider = {
  provide: 'ScheduleRepo',
  useClass: ScheduleRepository,
};
