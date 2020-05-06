import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeModule } from './joke/joke.module';
import { AdviceModule } from './advice/advice.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), HttpModule, JokeModule, AdviceModule, UserModule],
})
export class AppModule {}
