import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from '../employee-service/employee.service';
import { EmployeesDto } from '../dto/employee.dto';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';
import { Employees } from '@prisma/client';
import { LoginDto } from '../dto/login.dto';

@Controller('employees')
@UseFilters(IdExceptionFilter)
export class EmployeeController {
  constructor(private employeeService: EmployeeService) { }

  @Post('/createEmployee')
  createEmployee(@Body(ValidationPipe) dto: Employees) {
    return this.employeeService.createEmployee(dto);
  }

  @Get('sigin')
  async login(@Body() dto: LoginDto) {
    const sigin = this.employeeService.sigin(dto)
    if (sigin) return sigin;
    return new DataNotFoundException()
  }

  @Get('/getEmployee')
  async getAllEmployees() {
    try {
      const findAllEmployees = await this.employeeService.getAllEmployee();
      if (findAllEmployees) return findAllEmployees;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Get(':id')
  async getEmployee(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const getEmployee = await this.employeeService.getEmployee(id);
      if (getEmployee) return getEmployee;
      throw new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: EmployeesDto,
  ) {
    try {
      const updateEmployee = await this.employeeService.updateEmployee(
        id,
        updateEmployeeDto,
      );
      if (updateEmployee) return updateEmployee;
      throw new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: string) {
    try {
      const deleteEmployee = await this.employeeService.deleteEmployee(id);
      if (deleteEmployee != null) return deleteEmployee;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }
}
