import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { SalaryService } from '../service/salary/salary.service';
import { salaryDto } from '../dto/salary.dto';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';

@Controller('salary')
@UseFilters(IdExceptionFilter)
export class SalaryController {
    constructor(private readonly salaryService: SalaryService) { }

    @Post('/create')
    async create(@Body() dto: salaryDto) {
        return await this.salaryService.create(dto)
    }

    @Get()
    async getAll() {
        return await this.salaryService.findAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const getById = await this.salaryService.getSalaryById(id)
        if (getById) return getById
        throw new NotFoundException(`Data with this id "${id}" was not found`)
    }

    @Patch(':id')
    async updateSalary(
        @Param('id') id: string,
        @Body() salaryDto: salaryDto) {
        try {
            const updateSalary = await this.salaryService.updateSalary(id, salaryDto)
            if (updateSalary) return updateSalary
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
