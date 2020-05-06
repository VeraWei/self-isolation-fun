import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';
import JokeEntity from './joke.entity';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('joke')
export class JokeController {
    constructor(private jokeService: JokeService) {}
    @Get()
    findRandomOne(): Observable<AxiosResponse<JokeEntity>> {
        return this.jokeService.findRandomOne();
    }
}
