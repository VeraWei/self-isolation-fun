import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AdviceService } from './advice.service';

@Controller('advice')
export class AdviceController {
    constructor(private adviceService: AdviceService) {}
    @Get()
    findRandomOne(): Observable<AxiosResponse> {
        return this.adviceService.findRandomOne();
    }
}
