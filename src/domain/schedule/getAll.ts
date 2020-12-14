import { Injectable, Inject } from '@nestjs/common';
import { IScheduleRepository } from './schedule.repository';

const ScheduleRepo = () => Inject('ScheduleRepo');

@Injectable()
export class ScheduleGet {
  constructor(
    @ScheduleRepo() private readonly _schedule: IScheduleRepository,
  ) {}

  public async get() {
    return await this._schedule.getAll();
  }
}
