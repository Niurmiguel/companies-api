import UpdateCategoryDto from '@api/categories/dto/update.dto';
import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';

const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class CatUpdate {
  constructor(@CategoryRepo() private readonly _cat: ICategoryRepository) {}

  public async path(id: number, toUpdate: UpdateCategoryDto) {
    return await this._cat.updateById(id, toUpdate);
  }
}
