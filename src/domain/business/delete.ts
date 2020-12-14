import { Injectable, Inject } from '@nestjs/common';
import { IBusinessRepository } from './business.repository';

const BusinessRepo = () => Inject('BusinessRepo');

@Injectable()
export class BusinessDelete {
  constructor(
    @BusinessRepo()
    private readonly _business: IBusinessRepository,
  ) {}

  public async delete(id: number) {
    return await this._business.delete(id);
  }
}
