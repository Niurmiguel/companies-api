import CreateCategoryDto from '@api/categories/dto/create.dto';
import CreateLangDto from '@api/languages/dto/create.dto';
import { Injectable, Inject } from '@nestjs/common';
import { ILanguageRepository } from './language.repository';

const LangRepo = () => Inject('LangRepo');

@Injectable()
export class LangCreate {
  constructor(@LangRepo() private readonly _lang: ILanguageRepository) {}

  public async post(language: CreateLangDto) {
    return await this._lang.create(language);
  }
}
