import CreateBusinessDto from '@api/business/dto/create.dto';
import UpdateBusinessDto from '@api/business/dto/update.dto';
import BusinessNotFoundException from '@api/business/exceptions/businessNotFound.exception';
import { IBusinessRepository } from '@domain/business/business.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import BusinessEntity from './business.entity';

@Injectable()
export class BusinessRepository implements IBusinessRepository {
  constructor(
    @InjectRepository(BusinessEntity)
    private readonly _business: Repository<BusinessEntity>,
  ) {}

  getAll() {
    return this._business.find();
  }

  async getById(id: number) {
    const business = await this._business.findOne(id);
    if (business) {
      return business;
    }
    throw new BusinessNotFoundException(id);
  }

  async create(business: CreateBusinessDto) {
    const newBusiness = await this._business.create(business);
    await this._business.save(newBusiness);
    return newBusiness;
  }

  async updateById(id: number, business: UpdateBusinessDto) {
    await this._business.update(id, business);
    const updatedBusiness = await this._business.findOne(id);
    if (updatedBusiness) {
      return updatedBusiness;
    }
    throw new BusinessNotFoundException(id);
  }

  async delete(id: number) {
    const deleteResponse = await this._business.delete(id);
    if (!deleteResponse.affected) {
      throw new BusinessNotFoundException(id);
    }
  }
}
