import CreateScheduleDto from '@api/schedule/dto/create.dto';
import { Injectable, Inject } from '@nestjs/common';
import { IScheduleRepository } from './schedule.repository';

const ScheduleRepo = () => Inject('ScheduleRepo');

@Injectable()
export class ScheduleCreate {
  constructor(
    @ScheduleRepo() private readonly _schedule: IScheduleRepository,
  ) {}

  public async post(Scheduleuage: CreateScheduleDto) {
    return await this._schedule.create(Scheduleuage);
  }
}
