import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
} from 'class-validator';

export class UpdateBusinessDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public country: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public city: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  public zip_code: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public address: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public phone: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  public tags: string[];

  @IsString()
  @IsOptional()
  public website: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public logo: string;
}

export default UpdateBusinessDto;
