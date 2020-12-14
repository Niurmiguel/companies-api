import { NotFoundException } from '@nestjs/common';

class LanguageNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Language with id ${id} not found`);
  }
}

export default LanguageNotFoundException;
