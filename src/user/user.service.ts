import { Injectable } from '@nestjs/common';
import { CreateUserDto} from './user.dto';

@Injectable()
export class UserService {
    findAll(): string {
        return 'testing';
    }

    create(createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return {
            status: 200,
            content: createUserDto,
            id: 0,
        };
    }
      
}
