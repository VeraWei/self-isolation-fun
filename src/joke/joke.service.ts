import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {JokeDTO, PoemDto} from './joke.dto';
import { API } from '../api';

@Injectable()
export class JokeService {
    constructor(
        private readonly httpService: HttpService,
        // @InjectRepository(Joke)
        // private readonly jokeresposity: Repository<Joke>,
    ) {}
    findRandomOne(): Observable<AxiosResponse<JokeDTO>> {
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
    findRandomPoems(): Observable<AxiosResponse<PoemDto>> {
        return this.httpService.get(API['POEM'], {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map((response) => {
                // console.log(response.data);
                let newData:any;
                if (response.data) {
                    newData = {
                        content: response.data,
                        count: response.data.length
                    }
                }
                console.log(newData);
                return newData;
            }),
        );
    }

}
