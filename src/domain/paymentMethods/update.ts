import UpdatePaymentMethodDto from '@api/paymentMethod/dto/update.dto';
import { Injectable, Inject } from '@nestjs/common';
import { IPaymentMethodRepository } from './paymentMethod.repository';

const PaymentMethodRepo = () => Inject('PaymentMethodRepo');

@Injectable()
export class PaymentMethodUpdate {
  constructor(
    @PaymentMethodRepo()
    private readonly _paymentMethod: IPaymentMethodRepository,
  ) {}

  public async path(id: number, toUpdate: UpdatePaymentMethodDto) {
    return await this._paymentMethod.updateById(id, toUpdate);
  }
}
