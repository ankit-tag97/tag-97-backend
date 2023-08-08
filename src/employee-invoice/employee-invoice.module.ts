import { Module } from '@nestjs/common';
import { EmployeeInvoiceController } from './controller/employee-invoice/employee-invoice.controller';
import { EmployeeInvoiceService } from './service/employee-invoice/employee-invoice.service';

@Module({
  controllers: [EmployeeInvoiceController],
  providers: [EmployeeInvoiceService]
})
export class EmployeeInvoiceModule {}
