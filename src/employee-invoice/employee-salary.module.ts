import { Module } from '@nestjs/common';
import { SalaryController } from './controller/employee-invoice/employee-salary.controller';
import { SalaryService } from './service/employee-invoice/employee-salary.service';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService]
})
export class EmployeeSalaryModule { }
