import JwtAuthGuard from '@auth/guards/jwt.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
} from '@nestjs/common';
import FindOneParams from '@utils/findOneParams';
import { ScheduleCreate } from '@domain/schedule/create';
import { ScheduleGet } from '@domain/schedule/getAll';
import { ScheduleGetById } from '@domain/schedule/getById';
import { ScheduleUpdate } from '@domain/schedule/update';
import { ScheduleDelete } from '@domain/schedule/delete';
import CreateScheduleDto from './dto/create.dto';
import UpdateScheduleDto from './dto/update.dto';

@Controller('schedule')
@UseInterceptors(ClassSerializerInterceptor)
export default class ScheduleController {
  constructor(
    private readonly _scheduleCreate: ScheduleCreate,
    private readonly _scheduleGet: ScheduleGet,
    private readonly _scheduleById: ScheduleGetById,
    private readonly _scheduleUpdate: ScheduleUpdate,
    private readonly _scheduleDelete: ScheduleDelete,
  ) {}

  @Get()
  getAll() {
    return this._scheduleGet.get();
  }

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this._scheduleById.get(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() schedule: CreateScheduleDto) {
    return this._scheduleCreate.post(schedule);
  }

  @Patch(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() schedule: UpdateScheduleDto,
  ) {
    return this._scheduleUpdate.path(Number(id), schedule);
  }

  @Delete(':id')
  async delete(@Param() { id }: FindOneParams) {
    return this._scheduleDelete.delete(Number(id));
  }
}
