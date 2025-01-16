import { Module } from '@nestjs/common';
import { UserService } from '../res/service/user.service';
import { UserController } from '../res/controller/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
