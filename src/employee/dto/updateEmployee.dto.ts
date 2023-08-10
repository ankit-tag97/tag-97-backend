import {
    IsOptional,
    IsString,
} from 'class-validator';

export class updateEmployeeId {
    @IsString()
    @IsOptional()
    employeeId: string;
}
