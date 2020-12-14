import { Injectable, Inject } from '@nestjs/common';
import { IScheduleRepository } from './schedule.repository';

const ScheduleRepo = () => Inject('ScheduleRepo');

@Injectable()
export class ScheduleGetById {
  constructor(
    @ScheduleRepo() private readonly _schedule: IScheduleRepository,
  ) {}

  public async get(id: number) {
    return await this._schedule.getById(id);
  }
}
