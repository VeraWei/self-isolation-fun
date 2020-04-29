import { Module, HttpModule } from '@nestjs/common';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';

@Module({
    imports: [HttpModule],
    controllers: [JokeController],
    providers: [JokeService],
})
export class JokeModule { }
