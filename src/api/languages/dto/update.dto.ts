import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateLangDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  language: string;
}

export default UpdateLangDto;
