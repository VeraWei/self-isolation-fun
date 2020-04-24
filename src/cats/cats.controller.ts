import { Controller, Get, Post, HttpCode, Header, Redirect, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
// import { Cat } from './interface/cat.interface';
import { Cat } from './cats.entity';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    // @Get(':id')
    // findOne(@Param() params): string {
    //     console.log(params.id);
    //     return `This action returns a ${params.id} cat`;
    // }
    
    @Post('/create')
    @HttpCode(201)
    // @Header('Cache-Control', 'none')
    // @Redirect('https://nestjs.com', 301)
    create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        console.log(createCatDto);
        return this.catsService.create(createCatDto);
    }

}
