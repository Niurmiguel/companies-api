import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateScheduleDto {
  @IsNumber()
  @IsNotEmpty()
  day: number;

  @IsString()
  @IsNotEmpty()
  open: string;

  @IsString()
  @IsNotEmpty()
  close: string;
}

export default CreateScheduleDto;
