import UpdateScheduleDto from '@api/schedule/dto/update.dto';
import { Injectable, Inject } from '@nestjs/common';
import { IScheduleRepository } from './schedule.repository';

const ScheduleRepo = () => Inject('ScheduleRepo');

@Injectable()
export class ScheduleUpdate {
  constructor(
    @ScheduleRepo() private readonly _schedule: IScheduleRepository,
  ) {}

  public async path(id: number, toUpdate: UpdateScheduleDto) {
    return await this._schedule.updateById(id, toUpdate);
  }
}
