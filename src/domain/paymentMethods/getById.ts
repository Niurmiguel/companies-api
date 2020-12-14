import { Injectable, Inject } from '@nestjs/common';
import { IPaymentMethodRepository } from './paymentMethod.repository';

const PaymentMethodRepo = () => Inject('PaymentMethodRepo');

@Injectable()
export class PaymentMethodGetById {
  constructor(
    @PaymentMethodRepo()
    private readonly _paymentMethod: IPaymentMethodRepository,
  ) {}

  public async get(id: number) {
    return await this._paymentMethod.getById(id);
  }
}
