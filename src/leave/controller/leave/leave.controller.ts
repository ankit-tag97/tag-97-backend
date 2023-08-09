import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';
import { LeaveDto } from 'src/leave/dtos/leave.dto';
import { LeaveService } from 'src/leave/service/leave/leave.service';

@Controller('leave')
@UseFilters(IdExceptionFilter)
export class LeaveController {
    constructor(private readonly leaveService: LeaveService) { }

    @Post('')
    createLeave(@Body() dto: LeaveDto) {
        return this.leaveService.create(dto)
    }

    @Get()
    getAllLeave() {
        return this.leaveService.getAllLeave()
    }

    @Get(':id')
    getLeaveById(@Param('id') id: string) {
        return this.leaveService.getById(id)
    }

    @Patch(':id')
    updateLeave(@Param('id') id: string, @Body() dto: LeaveDto) {
        return this.leaveService.updateLeave(id, dto)
    }

    @Delete(':id')
    deleteLeave(@Param('id') id: string) {
        this.leaveService.deleteLeave(id)
    }
}
