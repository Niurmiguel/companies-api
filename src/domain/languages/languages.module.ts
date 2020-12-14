import { Module } from '@nestjs/common';
import { LanguageRepositoryModule } from '@persistence/languages/languageRepository.module';
import { LangCreate } from './create';
import { LangGet } from './getAll';
import { LangGetById } from './getById';
import { LangUpdate } from './update';
import { LangDelete } from './delete';

@Module({
  imports: [LanguageRepositoryModule],
  providers: [LangCreate, LangGet, LangGetById, LangUpdate, LangDelete],
  exports: [LangCreate, LangGet, LangGetById, LangUpdate, LangDelete],
})
export class LanguagesModule {}
