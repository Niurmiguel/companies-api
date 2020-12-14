import { Injectable, Inject } from '@nestjs/common';
import { IScheduleRepository } from './schedule.repository';

const ScheduleRepo = () => Inject('ScheduleRepo');

@Injectable()
export class ScheduleDelete {
  constructor(
    @ScheduleRepo() private readonly _schedule: IScheduleRepository,
  ) {}

  public async delete(id: number) {
    return await this._schedule.delete(id);
  }
}
