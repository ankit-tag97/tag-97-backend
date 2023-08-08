import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    companyEmail: string

    @IsString()
    @IsNotEmpty()
    password: string
}
