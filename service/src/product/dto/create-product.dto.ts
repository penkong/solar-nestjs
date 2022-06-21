


import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  public component: string

  @IsString()
  @IsNotEmpty()
  public model: string

  @IsString()
  @IsNotEmpty()
  public manufactor: string



}
