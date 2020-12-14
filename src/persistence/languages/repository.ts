import CreateLangDto from '@api/languages/dto/create.dto';
import UpdateLangDto from '@api/languages/dto/update.dto';
import LanguageNotFoundException from '@api/languages/exceptions/languageNotFound.exception';
import { ILanguageRepository } from '@domain/languages/language.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import LanguageEntity from './language.entity';

@Injectable()
export class LanguageRepository implements ILanguageRepository {
  constructor(
    @InjectRepository(LanguageEntity)
    private readonly _lang: Repository<LanguageEntity>,
  ) {}

  getAll() {
    return this._lang.find();
  }

  async getById(id: number) {
    const language = await this._lang.findOne(id);
    if (language) {
      return language;
    }
    throw new LanguageNotFoundException(id);
  }

  async create(language: CreateLangDto) {
    const newLanguage = await this._lang.create(language);
    await this._lang.save(newLanguage);
    return newLanguage;
  }

  async updateById(id: number, language: UpdateLangDto) {
    await this._lang.update(id, language);
    const updatedLanguage = await this._lang.findOne(id);
    if (updatedLanguage) {
      return updatedLanguage;
    }
    throw new LanguageNotFoundException(id);
  }

  async delete(id: number) {
    const deleteResponse = await this._lang.delete(id);
    if (!deleteResponse.affected) {
      throw new LanguageNotFoundException(id);
    }
  }
}
