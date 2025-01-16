import { Module } from '@nestjs/common';
import { UserModule } from './res/module/user.module';
import { UserController } from './res/controller/user.controller';
import { UserService } from './res/service/user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot('process.env.MONGODB_URI')],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
