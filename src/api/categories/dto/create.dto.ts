import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  points: number;
}

export default CreateCategoryDto;
