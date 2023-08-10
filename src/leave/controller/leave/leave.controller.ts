import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, Patch, Post, UseFilters, ValidationPipe } from '@nestjs/common';
import { Leave } from '@prisma/client';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';
import { LeaveDto } from 'src/leave/dtos/leave.dto';
import { LeaveService } from 'src/leave/service/leave/leave.service';

@Controller('leave')
@UseFilters(IdExceptionFilter)
export class LeaveController {
    constructor(private readonly leaveService: LeaveService) { }

    @Post()
    createLeave(@Body(ValidationPipe) dto: Leave) {
        return this.leaveService.create(dto)
    }

    @Get()
    async getAllLeave() {
        try {
            const findAllLeave = await this.leaveService.getAllLeave()
            if (findAllLeave) return findAllLeave
            return new NotFoundException()
        } catch {
            throw new DataNotFoundException()
        }
    }

    @Get(':id')
    async getLeaveById(@Param('id') id: string) {
        try {
            const getById = await this.leaveService.getById(id)
            if (getById) return getById;
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not Found`)
        }
    }

    @Patch(':id')
    async updateLeave(@Param('id') id: string, @Body() dto: LeaveDto) {
        try {
            const update = await this.leaveService.updateLeave(id, dto)
            if (update) return update
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }

    @Delete(':id')
    async deleteLeave(@Param('id') id: string) {
        try {
            const deleteLeaveById = await this.leaveService.deleteLeave(id)
            if (deleteLeaveById) return deleteLeaveById
            throw new DataNotFoundException()
        } catch {
            throw new NotFoundException(`Data with this id '${id}' was not found`)
        }
    }
}
