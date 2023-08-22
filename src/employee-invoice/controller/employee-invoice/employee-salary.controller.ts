import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { SalaryDto } from '../../dtos/employee-salary.dto';
import { SalaryService } from '../../service/employee-invoice/employee-salary.service';
import { DataNotFoundException } from '../../../exception/DataNotFoundException';
import { IdExceptionFilter } from '../../../exception/id-exception-filter';

@Controller('salary')
@UseFilters(IdExceptionFilter)
export class SalaryController {
    constructor(private readonly salaryService: SalaryService) { }

    @Post('/generate')
    async generateSalary(@Body() data: SalaryDto) {
        console.log(data);
        return await this.salaryService.generateSalary(data)
    }

    @Get()
    getAllSalary() {
        return this.salaryService.getAllSalary()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const getSalaryById = await this.salaryService.getById(id)
        if (getSalaryById) return getSalaryById
        throw new NotFoundException(`Data with this id "${id}" was not found`)
    }

    @Patch(':id')
    async updateEmployeeSalary(
        @Param('id') id: string,
        @Body() dto: SalaryDto) {
        try {
            const updateInvoice = await this.salaryService.updateSalary(id, dto)
            if (updateInvoice) return updateInvoice
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }

    @Delete(':id')
    async deleteSalary(@Param('id') id: string) {
        try {
            const deleteSalary = await this.salaryService.deleteSalary(id)
            if (deleteSalary) return deleteSalary
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }
}
