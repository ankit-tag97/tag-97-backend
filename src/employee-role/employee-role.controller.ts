import { Body, Controller, Post, UseFilters, ValidationPipe } from '@nestjs/common';
import { EmployeeRoleService } from './employee-role.service';
import { EmployeeRoleDto } from './dto/employee-role.dto';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';

@Controller('employee-role')
@UseFilters(IdExceptionFilter)
export class EmployeeRoleController {
  constructor(private employeeRoleService: EmployeeRoleService) { }

  @Post('employeeRole')
  createEmployeeRole(@Body(ValidationPipe) dto: EmployeeRoleDto) {
    return this.employeeRoleService.createEmployeeRole(dto);
  }
}
