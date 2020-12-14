import { Injectable, Inject } from '@nestjs/common';
import { ILanguageRepository } from './language.repository';

const LangRepo = () => Inject('LangRepo');

@Injectable()
export class LangGetById {
  constructor(@LangRepo() private readonly _lang: ILanguageRepository) {}

  public async get(id: number) {
    return await this._lang.getById(id);
  }
}
