import { Injectable, Inject } from '@nestjs/common';
import { IPaymentMethodRepository } from './paymentMethod.repository';

const PaymentMethodRepo = () => Inject('PaymentMethodRepo');

@Injectable()
export class PaymentMethodDelete {
  constructor(
    @PaymentMethodRepo()
    private readonly _paymentMethod: IPaymentMethodRepository,
  ) {}

  public async delete(id: number) {
    return await this._paymentMethod.delete(id);
  }
}
