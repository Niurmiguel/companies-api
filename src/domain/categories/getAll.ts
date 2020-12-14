import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';

const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class CatGet {
  constructor(@CategoryRepo() private readonly _cat: ICategoryRepository) {}

  public async get() {
    return await this._cat.getAll();
  }
}
