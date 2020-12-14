import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';

const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class CatGetById {
  constructor(@CategoryRepo() private readonly _cat: ICategoryRepository) {}

  public async get(id: number) {
    return await this._cat.getById(id);
  }
}
