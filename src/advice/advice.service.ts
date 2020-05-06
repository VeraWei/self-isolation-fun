import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import AdviceEntity from './advice.entity';
import { API } from '../api';

@Injectable()
export class AdviceService {

    constructor(
        private readonly httpService: HttpService,
        // @InjectRepository(Joke)
        // private readonly jokeresposity: Repository<Joke>,
    ) {}
    findRandomOne(): Observable<AxiosResponse<AdviceEntity>> {
        return this.httpService.get(API['ADVICE'], {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map((response) => {
                console.log(response.data);
                if (response.data.slip) {
                    response.data.content = response.data.slip.advice;
                    response.data.id = response.data.slip.slip_id;
                    response.data.status = 200;
                    delete response.data.slip;
                }
                return response.data;
            }),
        );
    }
}
