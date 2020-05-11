import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';
import {JokeDTO, PoemDto} from './joke.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('recommend')
export class JokeController {
    constructor(private jokeService: JokeService) {}
    @Get('/joke')
    findRandomOne(): Observable<AxiosResponse<JokeDTO>> {
        return this.jokeService.findRandomOne();
    }
    @Get('/poems')
    findRandomPoems(): Observable<AxiosResponse<PoemDto>> {
        return this.jokeService.findRandomPoems();
    }
}
