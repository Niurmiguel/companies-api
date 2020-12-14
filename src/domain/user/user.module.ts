import { Module } from '@nestjs/common';
import { UserRepositoryModule } from '@persistence/user/user.repository.module';
import { Create } from './create';

@Module({
  imports: [UserRepositoryModule],
  providers: [Create],
  exports: [Create],
})
export class UserModule {}
