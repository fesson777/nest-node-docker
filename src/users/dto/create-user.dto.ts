import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsEmail } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'почта @' }) // for swagger
  @IsString({ message: 'Должна быть строка' }) //validator-class pipi-validator
  @IsEmail({}, { message: 'Некорректный Email' })
  readonly email: string

  @ApiProperty({ example: '12345678', description: 'пароль пользователя' }) // for swagger
  @Length(3, 16, { message: 'Пароль от 3-х до 16-и символов' })
  readonly password: string
}
