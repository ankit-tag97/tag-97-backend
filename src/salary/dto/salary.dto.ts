import { IsDateString, IsNumber, IsString } from "class-validator";
import { Base } from "src/interface/base";

export class salaryDto extends Base {
    @IsString()
    employee_id: string

    @IsDateString()
    date: Date

    @IsNumber()
    salary: number
}
