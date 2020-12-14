import CreateCategoryDto from '@api/categories/dto/create.dto';
import UpdateCategoryDto from '@api/categories/dto/update.dto';
import CategoryNotFoundException from '@api/categories/exceptions/categoryNotFound.exception';
import { ICategoryRepository } from '@domain/categories/category.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CategoryEntity from './category.entity';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly _cat: Repository<CategoryEntity>,
  ) {}

  getAll() {
    return this._cat.find();
  }

  async getById(id: number) {
    const category = await this._cat.findOne(id);
    if (category) {
      return category;
    }
    throw new CategoryNotFoundException(id);
  }

  async create(category: CreateCategoryDto) {
    const newCategory = await this._cat.create(category);
    await this._cat.save(newCategory);
    return newCategory;
  }

  async updateById(id: number, category: UpdateCategoryDto) {
    await this._cat.update(id, category);
    const updatedCategory = await this._cat.findOne(id);
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new CategoryNotFoundException(id);
  }

  async delete(id: number) {
    const deleteResponse = await this._cat.delete(id);
    if (!deleteResponse.affected) {
      throw new CategoryNotFoundException(id);
    }
  }
}
