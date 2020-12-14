import { Injectable, Inject } from '@nestjs/common';
import { ILanguageRepository } from './language.repository';

const LangRepo = () => Inject('LangRepo');

@Injectable()
export class LangDelete {
  constructor(@LangRepo() private readonly _lang: ILanguageRepository) {}

  public async delete(id: number) {
    return await this._lang.delete(id);
  }
}
