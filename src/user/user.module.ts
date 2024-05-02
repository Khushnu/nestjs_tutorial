import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMiddleWare } from './user.middleware';
import { NestModule } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleWare).forRoutes('user')
    
  }
}