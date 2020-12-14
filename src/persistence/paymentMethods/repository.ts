import CreatePaymentMethodDto from '@api/paymentMethod/dto/create.dto';
import UpdatePaymentMethodDto from '@api/paymentMethod/dto/update.dto';
import PaymentMethodNotFoundException from '@api/paymentMethod/exceptions/paymentMethodNotFound.exception';
import { IPaymentMethodRepository } from '@domain/paymentMethods/paymentMethod.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PaymentMethodEntity from './paymentMethod.entity';

@Injectable()
export class PaymentMethodRepository implements IPaymentMethodRepository {
  constructor(
    @InjectRepository(PaymentMethodEntity)
    private readonly _paymentMethod: Repository<PaymentMethodEntity>,
  ) {}

  getAll() {
    return this._paymentMethod.find();
  }

  async getById(id: number) {
    const paymentMethod = await this._paymentMethod.findOne(id);
    if (paymentMethod) {
      return paymentMethod;
    }
    throw new PaymentMethodNotFoundException(id);
  }

  async create(paymentMethod: CreatePaymentMethodDto) {
    const newPaymentMethod = await this._paymentMethod.create(paymentMethod);
    await this._paymentMethod.save(newPaymentMethod);
    return newPaymentMethod;
  }

  async updateById(id: number, paymentMethod: UpdatePaymentMethodDto) {
    await this._paymentMethod.update(id, paymentMethod);
    const updatedPaymentMethod = await this._paymentMethod.findOne(id);
    if (updatedPaymentMethod) {
      return updatedPaymentMethod;
    }
    throw new PaymentMethodNotFoundException(id);
  }

  async delete(id: number) {
    const deleteResponse = await this._paymentMethod.delete(id);
    if (!deleteResponse.affected) {
      throw new PaymentMethodNotFoundException(id);
    }
  }
}
