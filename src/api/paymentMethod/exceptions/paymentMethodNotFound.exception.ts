import { NotFoundException } from '@nestjs/common';

class PaymentMethodNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`PaymentMethod with id ${id} not found`);
  }
}

export default PaymentMethodNotFoundException;
