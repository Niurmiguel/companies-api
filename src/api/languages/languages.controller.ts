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
import { LangCreate } from '@domain/languages/create';
import { LangGet } from '@domain/languages/getAll';
import { LangGetById } from '@domain/languages/getById';
import { LangUpdate } from '@domain/languages/update';
import { LangDelete } from '@domain/languages/delete';
import FindOneParams from '@utils/findOneParams';
import CreateLangDto from './dto/create.dto';
import UpdateLangDto from './dto/update.dto';

@Controller('languages')
@UseInterceptors(ClassSerializerInterceptor)
export default class LanguagesController {
  constructor(
    private readonly _langCreate: LangCreate,
    private readonly _langGet: LangGet,
    private readonly _langById: LangGetById,
    private readonly _langUpdate: LangUpdate,
    private readonly _langDelete: LangDelete,
  ) {}

  @Get()
  getAll() {
    return this._langGet.get();
  }

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this._langById.get(Number(id));
  }

  @Post()
  // @UseGuards(JwtAuthGuard)
  async create(@Body() language: CreateLangDto) {
    return this._langCreate.post(language);
  }

  @Patch(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() language: UpdateLangDto,
  ) {
    return this._langUpdate.path(Number(id), language);
  }

  @Delete(':id')
  async delete(@Param() { id }: FindOneParams) {
    return this._langDelete.delete(Number(id));
  }
}
