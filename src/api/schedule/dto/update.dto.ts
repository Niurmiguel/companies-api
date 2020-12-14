import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateScheduleDto {
  @IsNumber()
  @IsOptional()
  day: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  open: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  close: string;
}

export default UpdateScheduleDto;
