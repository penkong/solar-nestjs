import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  public first_name: string

  @IsString()
  @IsNotEmpty()
  public last_name: string

  @IsEmail()
  @IsNotEmpty()
  public email: string
}
