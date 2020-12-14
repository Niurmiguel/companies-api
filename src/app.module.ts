import { ApiModule } from '@api/api.module';
import { AuthModule } from '@auth/auth.module';
import { DomainModule } from '@domain/domain.module';
import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from '@persistence/persistence.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DbModule,
    AuthModule,
    DomainModule,
    PersistenceModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
