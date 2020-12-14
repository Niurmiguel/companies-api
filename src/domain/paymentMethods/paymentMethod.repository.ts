import CreatePaymentMethodDto from '@api/paymentMethod/dto/create.dto';
import UpdatePaymentMethodDto from '@api/paymentMethod/dto/update.dto';

export interface IPaymentMethodRepository {
  getAll();
  getById(userId: number);
  create(paymentMethod: CreatePaymentMethodDto);
  updateById(
    id: number,
    paymentMethod: UpdatePaymentMethodDto,
  ): Promise<UpdatePaymentMethodDto>;
  delete(id: number);
}
