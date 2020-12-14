import CreatePaymentMethodDto from '@api/paymentMethod/dto/create.dto';
import { Injectable, Inject } from '@nestjs/common';
import { IPaymentMethodRepository } from './paymentMethod.repository';

const PaymentMethodRepo = () => Inject('PaymentMethodRepo');

@Injectable()
export class PaymentMethodCreate {
  constructor(
    @PaymentMethodRepo()
    private readonly _paymentMethod: IPaymentMethodRepository,
  ) {}

  public async post(paymentMethod: CreatePaymentMethodDto) {
    return await this._paymentMethod.create(paymentMethod);
  }
}
