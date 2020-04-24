import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
// import { Cat } from './interface/cat.interface';
import { Cat } from './cats.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(
      @InjectRepository(Cat)
      private readonly catsrepository: Repository<Cat>
    ) {}

    create(cat: CreateCatDto): Promise<Cat> {
      console.log('cat', cat);
      return this.catsrepository.save(cat);
    }

    findAll(): Promise<Cat[]> {
        return this.catsrepository.find();
    }
}
