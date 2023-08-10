import { Body, Controller, Get, NotFoundException, Param, Post, UseFilters } from '@nestjs/common';
import { EmployeeInvoice } from '@prisma/client';
import { EmployeeInvoiceService } from 'src/employee-invoice/service/employee-invoice/employee-invoice.service';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';

@Controller('employee-invoice')
@UseFilters(IdExceptionFilter)
export class EmployeeInvoiceController {
    constructor(private readonly InvoiceService: EmployeeInvoiceService) { }

    @Post('/create')
    async createInvoice(@Body() data: EmployeeInvoice): Promise<EmployeeInvoice> {
        return this.InvoiceService.createInvoice(data)
    }

    @Get()
    getAllInvoice() {
        return this.InvoiceService.getAllInvoice()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const getInvoiceById = await this.InvoiceService.getById(id)
        if (getInvoiceById) return getInvoiceById
        throw new NotFoundException(`Data with this id "${id}" was not found`)
    }
}
