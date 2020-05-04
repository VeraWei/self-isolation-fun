import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeController } from './joke/joke.controller';
import { AdviceController } from './advice/advice.controller';
import { RecommendController } from './recommend/recommend.controller';
import { JokeModule } from './joke/joke.module';
import { JokeService } from './joke/joke.service';
import { AdviceService } from './advice/advice.service';
import { AdviceModule } from './advice/advice.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [JokeModule, HttpModule, AdviceModule, UserModule],
  controllers: [JokeController, AdviceController, RecommendController, UserController],
  providers: [JokeService, AdviceService, UserService],
})
export class AppModule {}
