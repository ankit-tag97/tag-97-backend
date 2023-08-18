import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { EmployeeInvoice } from '@prisma/client';
import { EmployeeInvoiceDto } from 'src/employee-invoice/dtos/employee-invoice.dto';
import { EmployeeInvoiceService } from 'src/employee-invoice/service/employee-invoice/employee-invoice.service';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';
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

    @Patch(':id')
    async updateEmployeeInvoice(
        @Param('id') id: string,
        @Body() dto: EmployeeInvoiceDto) {
        try {
            const updateInvoice = await this.InvoiceService.updateInvoice(id, dto)
            if (updateInvoice) return updateInvoice
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }

    @Delete(':id')
    async deleteEmployeeInvoice(@Param('id') id: string) {
        try {
            const deleteInvoice = await this.InvoiceService.deleteInvoice(id)
            if (deleteInvoice) return deleteInvoice
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }
}
