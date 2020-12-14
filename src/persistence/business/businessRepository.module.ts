import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessRepoProvider } from './business.provider';
import BusinessEntity from './business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessEntity])],
  providers: [BusinessRepoProvider],
  exports: [BusinessRepoProvider],
})
export class BusinessRepositoryModule {}
