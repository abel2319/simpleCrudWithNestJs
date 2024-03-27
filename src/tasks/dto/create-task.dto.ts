import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../schemas/tasks.schemas';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please enter correct category name' })
  readonly status: Category;

  /* @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
  */
}
