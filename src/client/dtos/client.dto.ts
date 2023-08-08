import { IsEmail, IsString } from 'class-validator';
import { Base } from 'src/interface/base';

export class ClientDto extends Base {
  @IsString()
  name: string;

  @IsString()
  alias: string;

  @IsString()
  invoiceColor: string;

  @IsString()
  phone: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  address: string;
}
