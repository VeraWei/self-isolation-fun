import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Advice } from './advice.entity';
import { AdviceService } from './advice.service';

@Controller('advice')
export class AdviceController {
    constructor(private adviceService: AdviceService) {}
    @Get()
    findRandomOne(): Observable<AxiosResponse<Advice>> {
        return this.adviceService.findRandomOne();
    }
}
