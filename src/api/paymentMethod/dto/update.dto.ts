import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdatePaymentMethodDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;
}

export default UpdatePaymentMethodDto;
