import CreateBusinessDto from '@api/business/dto/create.dto';
import { Injectable, Inject } from '@nestjs/common';
import { IBusinessRepository } from './business.repository';

const BusinessRepo = () => Inject('BusinessRepo');

@Injectable()
export class BusinessCreate {
  constructor(
    @BusinessRepo()
    private readonly _business: IBusinessRepository,
  ) {}

  public async post(business: CreateBusinessDto) {
    return await this._business.create(business);
  }
}
