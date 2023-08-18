import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Base } from "src/interface/base";

export class EmployeeInvoiceDto extends Base {
    @IsString()
    @IsNotEmpty()
    employeeId: string

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
    paymentDeu: Date

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
    paymentTerms: number

    @IsNumber()
    totalAmountPaid: number
}