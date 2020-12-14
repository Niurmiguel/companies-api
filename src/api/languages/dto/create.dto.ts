import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLangDto {
  @IsString()
  @IsNotEmpty()
  language: string;
}

export default CreateLangDto;
