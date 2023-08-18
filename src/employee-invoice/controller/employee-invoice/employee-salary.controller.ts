import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { EmployeeSalaryDto } from '../../dtos/employee-salary.dto';
import { EmployeeSalaryService } from '../../service/employee-invoice/employee-salary.service';
import { DataNotFoundException } from '../../../exception/DataNotFoundException';
import { IdExceptionFilter } from '../../../exception/id-exception-filter';

@Controller('employee-salary')
// @UseFilters(IdExceptionFilter)
export class EmployeeSalaryController {
    constructor(private readonly salaryService: EmployeeSalaryService) { }

    @Post('/create')
    async createInvoice(@Body() data: EmployeeSalaryDto) {
        console.log(data);
        return this.salaryService.createInvoice(data)
    }

    @Get()
    getAllInvoice() {
        return this.salaryService.getAllInvoice()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const getInvoiceById = await this.salaryService.getById(id)
        if (getInvoiceById) return getInvoiceById
        throw new NotFoundException(`Data with this id "${id}" was not found`)
    }

    @Patch(':id')
    async updateEmployeeInvoice(
        @Param('id') id: string,
        @Body() dto: EmployeeSalaryDto) {
        try {
            const updateInvoice = await this.salaryService.updateInvoice(id, dto)
            if (updateInvoice) return updateInvoice
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }

    @Delete(':id')
    async deleteEmployeeInvoice(@Param('id') id: string) {
        try {
            const deleteInvoice = await this.salaryService.deleteInvoice(id)
            if (deleteInvoice) return deleteInvoice
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }
}
