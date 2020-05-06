import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import JokeEntity from './joke.entity';
import { API } from '../api';

@Injectable()
export class JokeService {
    constructor(
        private readonly httpService: HttpService,
        // @InjectRepository(Joke)
        // private readonly jokeresposity: Repository<Joke>,
    ) {}
    findRandomOne(): Observable<AxiosResponse<JokeEntity>> {
        return this.httpService.get(API['JOKE'], {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map((response) => {
                console.log(response.data);
                if (response.data.joke) {
                    response.data.content = response.data.joke;
                    delete response.data.joke;
                }
                return response.data;
            }),
        );
    }

}
