import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePaymentMethodDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export default CreatePaymentMethodDto;
