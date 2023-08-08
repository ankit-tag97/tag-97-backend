import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { EmployeeRoleService } from './employee-role.service';
import { EmployeeRoleDto } from './dto/employee-role.dto';

@Controller('employee-role')
export class EmployeeRoleController {
  constructor(private employeeRoleService: EmployeeRoleService) {}

  @Post('employeeRole')
  createEmployeeRole(@Body(ValidationPipe) dto: EmployeeRoleDto) {
    return this.employeeRoleService.createEmployeeRole(dto);
  }
}
