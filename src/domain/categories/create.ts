import CreateCategoryDto from '@api/categories/dto/create.dto';
import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';

const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class CatCreate {
  constructor(@CategoryRepo() private readonly _cat: ICategoryRepository) {}

  public async post(category: CreateCategoryDto) {
    return await this._cat.create(category);
  }
}
