import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { JokeController } from './joke/joke.controller';
import { AdviceController } from './advice/advice.controller';
import { RecommendController } from './recommend/recommend.controller';
import { JokeModule } from './joke/joke.module';
import { JokeService } from './joke/joke.service';
import { AdviceService } from './advice/advice.service';
import { AdviceModule } from './advice/advice.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, JokeModule, HttpModule, AdviceModule],
  controllers: [JokeController, AdviceController, RecommendController],
//   controllers: [CatsController],
  providers: [JokeService, AdviceService],
})
export class AppModule {}
