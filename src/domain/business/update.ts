import UpdateBusinessDto from '@api/business/dto/update.dto';
import { Injectable, Inject } from '@nestjs/common';
import { IBusinessRepository } from './business.repository';

const BusinessRepo = () => Inject('BusinessRepo');

@Injectable()
export class BusinessUpdate {
  constructor(
    @BusinessRepo()
    private readonly _business: IBusinessRepository,
  ) {}

  public async path(id: number, toUpdate: UpdateBusinessDto) {
    return await this._business.updateById(id, toUpdate);
  }
}
