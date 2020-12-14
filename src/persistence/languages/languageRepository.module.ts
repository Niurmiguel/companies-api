import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import LanguageEntity from './language.entity';
import { LanguageRepoProvider } from './language.provider';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  providers: [LanguageRepoProvider],
  exports: [LanguageRepoProvider],
})
export class LanguageRepositoryModule {}
