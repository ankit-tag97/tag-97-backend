import { Module } from '@nestjs/common';
import { EmployeeSalaryController } from './controller/employee-invoice/employee-salary.controller';
import { EmployeeSalaryService } from './service/employee-invoice/employee-salary.service';

@Module({
  controllers: [EmployeeSalaryController],
  providers: [EmployeeSalaryService]
})
export class EmployeeSalaryModule {}
