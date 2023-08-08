import { IsString } from "class-validator";

export class EmployeeAssetDto {
    @IsString()
    employee_id: string

    @IsString()
    asset_id: string
}
