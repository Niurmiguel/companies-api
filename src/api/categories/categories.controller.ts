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
import { CatCreate } from '@domain/categories/create';
import { CatGet } from '@domain/categories/getAll';
import { CatGetById } from '@domain/categories/getById';
import { CatUpdate } from '@domain/categories/update';
import { CatDelete } from '@domain/categories/delete';
import FindOneParams from '@utils/findOneParams';
import CreateCategoryDto from './dto/create.dto';
import UpdateCategoryDto from './dto/update.dto';

@Controller('categories')
@UseInterceptors(ClassSerializerInterceptor)
export default class CategoriesController {
  constructor(
    private readonly _catCreate: CatCreate,
    private readonly _catGet: CatGet,
    private readonly _catById: CatGetById,
    private readonly _catUpdate: CatUpdate,
    private readonly _catDelete: CatDelete,
  ) {}

  @Get()
  getAllCategories() {
    return this._catGet.get();
  }

  @Get(':id')
  getCategoryById(@Param() { id }: FindOneParams) {
    return this._catById.get(Number(id));
  }

  @Post()
  // @UseGuards(JwtAuthGuard)
  async create(@Body() category: CreateCategoryDto) {
    return this._catCreate.post(category);
  }

  @Patch(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() category: UpdateCategoryDto,
  ) {
    return this._catUpdate.path(Number(id), category);
  }

  @Delete(':id')
  async deleteCategory(@Param() { id }: FindOneParams) {
    return this._catDelete.delete(Number(id));
  }
}
