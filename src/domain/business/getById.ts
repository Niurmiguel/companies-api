import { Injectable, Inject } from '@nestjs/common';
import { IBusinessRepository } from './business.repository';

const BusinessRepo = () => Inject('BusinessRepo');

@Injectable()
export class BusinessGetById {
  constructor(
    @BusinessRepo()
    private readonly _business: IBusinessRepository,
  ) {}

  public async get(id: number) {
    return await this._business.getById(id);
  }
}
