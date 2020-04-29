import { Module, HttpModule } from '@nestjs/common';
import { AdviceController } from './advice.controller';
import { AdviceService } from './advice.service';

@Module({
    imports: [HttpModule],
    controllers: [AdviceController],
    providers: [AdviceService],
})
export class AdviceModule {}
