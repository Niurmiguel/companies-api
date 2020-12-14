import { Injectable, Inject } from '@nestjs/common';
import { IBusinessRepository } from './business.repository';

const BusinessRepo = () => Inject('BusinessRepo');

@Injectable()
export class BusinessGet {
  constructor(
    @BusinessRepo()
    private readonly _business: IBusinessRepository,
  ) {}

  public async get() {
    return await this._business.getAll();
  }
}
