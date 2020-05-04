import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService }from './user.service';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    findAll(): string{
        return this.userService.findAll();
    }

    @Post('/create')
    create(@Body() createUserDto: CreateUserDto) {
        console.log('controler', createUserDto);
        return this.userService.create(createUserDto);
    }
}
