export class CreateUserDto {
  name: string;
  feel: number;
}

export interface UsersRO {
  users: CreateUserDto[];
  count: number;
}

export interface RequestFormular {
  status: number;
  content: UsersRO;
}
