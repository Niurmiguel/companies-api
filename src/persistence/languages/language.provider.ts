import { Provider } from '@nestjs/common';
import { LanguageRepository } from './repository';

export const LanguageRepoProvider: Provider = {
  provide: 'LangRepo',
  useClass: LanguageRepository,
};
