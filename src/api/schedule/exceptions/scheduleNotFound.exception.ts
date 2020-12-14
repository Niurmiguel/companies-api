import { NotFoundException } from '@nestjs/common';

class ScheduleNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Schedule with id ${id} not found`);
  }
}

export default ScheduleNotFoundException;
