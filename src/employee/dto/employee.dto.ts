import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Base } from '../../interface/base';
import { gender } from 'src/enum/enum';

export class EmployeesDto extends Base {

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @MaxLength(10)
  @MinLength(10)
  @IsPhoneNumber('IN')
  phoneNumber: string;

  @IsString()
  @MaxLength(10)
  @MinLength(10)
  @IsPhoneNumber('IN')
  alternatePhoneNumber: string;

  @IsString()
  @IsEmail()
  personalEmail: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  companyEmail: string;

  @IsDateString()
  @IsOptional()
  dateOfEmployement: Date;

  @IsDateString()
  dateOfBirth: Date;

  @IsDateString()
  dateOfJoining: Date;

  @IsString()
  @IsEnum(gender)
  gender: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  street: string;

  @IsString()
  pincode: string;

  @IsString()
  profileImageUrl: string;

  @IsString()
  aadhar: string;

  @IsString()
  otherIdProof: string;

  @IsString()
  @IsOptional()
  password: string
}
