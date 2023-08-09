import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeInvoice } from '@prisma/client';
import { EmployeeInvoiceService } from 'src/employee-invoice/service/employee-invoice/employee-invoice.service';

@Controller('employee-invoice')
export class EmployeeInvoiceController {
    constructor(private readonly InvoiceService: EmployeeInvoiceService) { }

    @Post('/create')
    async createInvoice(@Body() data: EmployeeInvoice):Promise<EmployeeInvoice> {
        return this.InvoiceService.createInvoice(data)
    }
}
