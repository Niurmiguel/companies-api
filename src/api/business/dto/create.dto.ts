import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  public country: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @IsNumber()
  @IsNotEmpty()
  public zip_code: number;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsArray()
  @IsNotEmpty()
  public tags: string[];

  @IsString()
  public website: string;

  @IsString()
  @IsNotEmpty()
  public logo: string;
}

export default CreateBusinessDto;
