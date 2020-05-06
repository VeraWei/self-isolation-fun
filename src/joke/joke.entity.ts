import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export default class Joke extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  joke: string;

  @Column()
  status: number
}
