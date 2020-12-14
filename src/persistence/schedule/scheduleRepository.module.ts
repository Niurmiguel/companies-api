import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ScheduleEntity from './schedule.entity';
import { ScheduleRepoProvider } from './schedule.provider';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleEntity])],
  providers: [ScheduleRepoProvider],
  exports: [ScheduleRepoProvider],
})
export class ScheduleRepositoryModule {}
