import JwtAuthGuard from '@auth/guards/jwt.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
} from '@nestjs/common';
import FindOneParams from '@utils/findOneParams';
import { PaymentMethodCreate } from '@domain/paymentMethods/create';
import { PaymentMethodGet } from '@domain/paymentMethods/getAll';
import { PaymentMethodGetById } from '@domain/paymentMethods/getById';
import { PaymentMethodUpdate } from '@domain/paymentMethods/update';
import { PaymentMethodDelete } from '@domain/paymentMethods/delete';
import CreatePaymentMethodDto from './dto/create.dto';
import UpdatePaymentMethodDto from './dto/update.dto';

@Controller('schedule')
@UseInterceptors(ClassSerializerInterceptor)
export default class LanguagesController {
  constructor(
    private readonly _paymentMethodCreate: PaymentMethodCreate,
    private readonly _paymentMethodGet: PaymentMethodGet,
    private readonly _paymentMethodById: PaymentMethodGetById,
    private readonly _paymentMethodUpdate: PaymentMethodUpdate,
    private readonly _paymentMethodDelete: PaymentMethodDelete,
  ) {}

  @Get()
  getAll() {
    return this._paymentMethodGet.get();
  }

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this._paymentMethodById.get(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() paymentMethod: CreatePaymentMethodDto) {
    return this._paymentMethodCreate.post(paymentMethod);
  }

  @Patch(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() paymentMethod: UpdatePaymentMethodDto,
  ) {
    return this._paymentMethodUpdate.path(Number(id), paymentMethod);
  }

  @Delete(':id')
  async delete(@Param() { id }: FindOneParams) {
    return this._paymentMethodDelete.delete(Number(id));
  }
}
