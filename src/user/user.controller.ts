import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
