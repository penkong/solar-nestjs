


import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  public name: string

  @IsEmail()
  public email: string
}
