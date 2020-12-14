import UpdateLangDto from '@api/languages/dto/update.dto';
import { Injectable, Inject } from '@nestjs/common';
import { ILanguageRepository } from './language.repository';

const LangRepo = () => Inject('LangRepo');

@Injectable()
export class LangUpdate {
  constructor(@LangRepo() private readonly _lang: ILanguageRepository) {}

  public async path(id: number, toUpdate: UpdateLangDto) {
    return await this._lang.updateById(id, toUpdate);
  }
}
