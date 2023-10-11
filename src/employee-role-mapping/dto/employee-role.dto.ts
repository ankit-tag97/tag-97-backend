import { IsString } from 'class-validator';

export class EmployeeRoleDto {
  @IsString()
  employee_id: string;

  @IsString()
  role_id: string;
}
