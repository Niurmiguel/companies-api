import CreateScheduleDto from '@api/schedule/dto/create.dto';
import UpdateScheduleDto from '@api/schedule/dto/update.dto';

export interface IScheduleRepository {
  getAll();
  getById(userId: number);
  create(category: CreateScheduleDto);
  updateById(
    id: number,
    schedule: UpdateScheduleDto,
  ): Promise<UpdateScheduleDto>;
  delete(id: number);
}
