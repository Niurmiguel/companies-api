import { NotFoundException } from '@nestjs/common';

class BusinessNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Business with id ${id} not found`);
  }
}

export default BusinessNotFoundException;
