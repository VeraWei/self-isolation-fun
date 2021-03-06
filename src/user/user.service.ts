import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UsersRO } from './user.dto';
import UserEntity from './user.entity';
import { Repository, getRepository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }
    
    async findAll(): Promise<UsersRO> {
        const qb = await getRepository(UserEntity)
        .createQueryBuilder('user')
        qb.orderBy('user.created', 'DESC');
    
        const count = await qb.getCount();

        const users = await qb.getMany();

        return {
            users,
            count,
        };
    }

    async create(userData: CreateUserDto): Promise<UserEntity> {
        let user = new UserEntity();
        user.name = userData.name;
        user.feel = userData.feel || 0;
        const newuser = await this.userRepository.save(user);

        return newuser;
    }

    // ideally user name is unique since there is no big data
    async update(name: string, feel: number): Promise<UserEntity> {
        let toUpdate = await this.userRepository.findOne({ name});
        let updated = Object.assign(toUpdate, {feel});
        const userData = await this.userRepository.save(updated);
        return userData;
    }
}
