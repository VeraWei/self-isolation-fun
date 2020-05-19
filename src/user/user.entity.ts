import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  feel: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }
}
