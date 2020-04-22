import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
  ],
})
export class AppModule {}