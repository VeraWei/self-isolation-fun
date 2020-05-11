import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { UserService }from './user.service';
import { CreateUserDto, RequestFormular } from './user.dto';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    async findAll(): Promise<RequestFormular> {
        const content = await this.userService.findAll();
        return {
            status: 200,
            content,
        }
    }

    @Post('/create')
    async create(@Body() createUserDto: CreateUserDto) {
        console.log('controler', createUserDto);
        return this.userService.create(createUserDto);
    }

    @Put('/update')
    async update(@Body() params) {
        console.log('controler', params);
        return this.userService.update(params.name, params.feel);
    }
}
