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
import { BusinessCreate } from '@domain/business/create';
import { BusinessGet } from '@domain/business/getAll';
import { BusinessGetById } from '@domain/business/getById';
import { BusinessUpdate } from '@domain/business/update';
import { BusinessDelete } from '@domain/business/delete';
import CreateBusinessDto from './dto/create.dto';
import UpdateBusinessDto from './dto/update.dto';

@Controller('business')
@UseInterceptors(ClassSerializerInterceptor)
export default class BusinessController {
  constructor(
    private readonly _businessCreate: BusinessCreate,
    private readonly _businessGet: BusinessGet,
    private readonly _businessById: BusinessGetById,
    private readonly _businessUpdate: BusinessUpdate,
    private readonly _businessDelete: BusinessDelete,
  ) {}

  @Get()
  getAll() {
    return this._businessGet.get();
  }

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this._businessById.get(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() business: CreateBusinessDto) {
    return this._businessCreate.post(business);
  }

  @Patch(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() business: UpdateBusinessDto,
  ) {
    return this._businessUpdate.path(Number(id), business);
  }

  @Delete(':id')
  async delete(@Param() { id }: FindOneParams) {
    return this._businessDelete.delete(Number(id));
  }
}
