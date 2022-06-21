import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

// ---
export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  public name: string

  @IsEmail()
  public email: string
}
