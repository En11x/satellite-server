import {
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsString,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John',
    description: 'user name',
    format: 'string',
    minLength: 6,
    maxLength: 32,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(32)
  readonly username: string;

  @ApiProperty({
    example: '497421855@qq.com',
    description: 'The email of the User',
    format: 'email',
    uniqueItems: true,
    minLength: 5,
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'password',
    description: 'The password of the User',
    format: 'string',
    minLength: 5,
    maxLength: 1024,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(1024)
  readonly password: string;
}
