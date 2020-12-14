import { Module } from '@nestjs/common';
import { ScheduleCreate } from './create';
import { ScheduleGet } from './getAll';
import { ScheduleGetById } from './getById';
import { ScheduleUpdate } from './update';
import { ScheduleDelete } from './delete';
import { ScheduleRepositoryModule } from '@persistence/schedule/scheduleRepository.module';

@Module({
  imports: [ScheduleRepositoryModule],
  providers: [
    ScheduleCreate,
    ScheduleGet,
    ScheduleGetById,
    ScheduleUpdate,
    ScheduleDelete,
  ],
  exports: [
    ScheduleCreate,
    ScheduleGet,
    ScheduleGetById,
    ScheduleUpdate,
    ScheduleDelete,
  ],
})
export class ScheduleModule {}
