import { IsDateString, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { leave } from "src/enum/enum";
import { Base } from "src/interface/base";

export class LeaveDto extends Base {
    @IsString()
    @IsNotEmpty()
    employeeId: string

    @IsDateString()
    startDateTime: Date

    @IsDateString()
    endDateTime: Date

    @IsString()
    @IsNotEmpty()
    reasonForLeave: string

    @IsString()
    note: string

    @IsString()
    @IsEnum(leave)
    status: string
}