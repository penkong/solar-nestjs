import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

// ---

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

  @IsOptional()
  public quality!: string

  @IsOptional()
  public box_size!: string

  @IsOptional()
  public length!: string

  @IsOptional()
  public width!: string

  @IsOptional()
  public height!: string

  @IsOptional()
  public decription!: string
}
