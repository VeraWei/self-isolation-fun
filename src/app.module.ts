import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeController } from './joke/joke.controller';
import { AdviceController } from './advice/advice.controller';
import { RecommendController } from './recommend/recommend.controller';
import { JokeModule } from './joke/joke.module';
import { JokeService } from './joke/joke.service';
import { AdviceService } from './advice/advice.service';
import { AdviceModule } from './advice/advice.module';

@Module({
  imports: [TypeOrmModule.forRoot(), JokeModule, HttpModule, AdviceModule],
  controllers: [JokeController, AdviceController, RecommendController],
  providers: [JokeService, AdviceService],
})
export class AppModule {}
