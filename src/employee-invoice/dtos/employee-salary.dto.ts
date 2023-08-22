import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Base } from "../../interface/base";

export class SalaryDto extends Base {
    @IsString()
    @IsNotEmpty()
    employee_id: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    designation: string

    @IsString()
    @IsDateString()
    salaryDate: Date

    @IsString()
    location: string

    @IsString()
    modeOfPayment: string

    @IsNumber()
    basicSalary: number

    @IsNumber()
    overTime: number

    @IsNumber()
    paidLeave: number

    @IsNumber()
    insentive: number

    @IsNumber()
    @IsOptional()
    securityAmount: number

    @IsNumber()
    professionalTax: number

    @IsNumber()
    absent: number

    @IsNumber()
    advanceWithdrawal: number

    @IsNumber()
    totalDeduction: number

    @IsString()
    description: string

    @IsNumber()
    @IsOptional()
    netpay: number
}
