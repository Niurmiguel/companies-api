import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';

const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class CatDelete {
  constructor(@CategoryRepo() private readonly _cat: ICategoryRepository) {}

  public async delete(id: number) {
    return await this._cat.delete(id);
  }
}
