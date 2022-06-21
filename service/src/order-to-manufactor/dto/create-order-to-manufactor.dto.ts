import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

// ---

export class CreateOrderToManufactorDto {
  @IsString()
  @IsNotEmpty()
  public name: string

  @IsEmail()
  public email: string
}
