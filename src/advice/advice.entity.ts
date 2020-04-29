import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Advice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  joke: string;

  @Column()
  status: number
}
