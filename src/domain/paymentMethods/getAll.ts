import { Injectable, Inject } from '@nestjs/common';
import { IPaymentMethodRepository } from './paymentMethod.repository';

const PaymentMethodRepo = () => Inject('PaymentMethodRepo');

@Injectable()
export class PaymentMethodGet {
  constructor(
    @PaymentMethodRepo()
    private readonly _paymentMethod: IPaymentMethodRepository,
  ) {}

  public async get() {
    return await this._paymentMethod.getAll();
  }
}
