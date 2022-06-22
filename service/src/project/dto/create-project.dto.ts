import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator'

// ---
export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  public name: string

  @IsString()
  @IsNotEmpty()
  public customer: string

  @IsOptional()
  @IsNumber()
  lng: number

  @IsOptional()
  @IsNumber()
  lat: number

  @IsOptional()
  @IsString()
  public description: string

  @IsOptional()
  public components_list: string

  @IsString()
  public construction_date: string

  @IsOptional()
  @IsString()
  public status: string
}
