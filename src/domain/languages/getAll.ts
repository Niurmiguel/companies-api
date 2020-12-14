import { Injectable, Inject } from '@nestjs/common';
import { ILanguageRepository } from './language.repository';

const LangRepo = () => Inject('LangRepo');

@Injectable()
export class LangGet {
  constructor(@LangRepo() private readonly _lang: ILanguageRepository) {}

  public async get() {
    return await this._lang.getAll();
  }
}
