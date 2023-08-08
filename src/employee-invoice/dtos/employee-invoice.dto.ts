import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EmployeeDesignation } from "src/enum/enum";
import { Base } from "src/interface/base";

export class EmployeeInvoiveDto extends Base {
    @IsString()
    @IsNotEmpty()
    employeeId: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsEnum(EmployeeDesignation)
    designation: string

    @IsString()
    @IsDateString()
    paymentDeu: Date

    @IsString()
    location: string




}