import CreateScheduleDto from '@api/schedule/dto/create.dto';
import UpdateScheduleDto from '@api/schedule/dto/update.dto';
import ScheduleNotFoundException from '@api/schedule/exceptions/scheduleNotFound.exception';
import { IScheduleRepository } from '@domain/schedule/schedule.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ScheduleEntity from './schedule.entity';

@Injectable()
export class ScheduleRepository implements IScheduleRepository {
  constructor(
    @InjectRepository(ScheduleEntity)
    private readonly _schedule: Repository<ScheduleEntity>,
  ) {}

  getAll() {
    return this._schedule.find();
  }

  async getById(id: number) {
    const schedule = await this._schedule.findOne(id);
    if (schedule) {
      return schedule;
    }
    throw new ScheduleNotFoundException(id);
  }

  async create(schedule: CreateScheduleDto) {
    const newSchedule = await this._schedule.create(schedule);
    await this._schedule.save(newSchedule);
    return newSchedule;
  }

  async updateById(id: number, schedule: UpdateScheduleDto) {
    await this._schedule.update(id, schedule);
    const updatedSchedule = await this._schedule.findOne(id);
    if (updatedSchedule) {
      return updatedSchedule;
    }
    throw new ScheduleNotFoundException(id);
  }

  async delete(id: number) {
    const deleteResponse = await this._schedule.delete(id);
    if (!deleteResponse.affected) {
      throw new ScheduleNotFoundException(id);
    }
  }
}
