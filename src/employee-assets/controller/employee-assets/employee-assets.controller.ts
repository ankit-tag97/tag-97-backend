import { Body, Controller, Get, NotFoundException, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { EmployeeAssetDto } from 'src/employee-assets/dto/employee-asset.dto';
import { EmployeeAssetsService } from 'src/employee-assets/service/employee-assets/employee-assets.service';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';

@Controller('employee-assets')
@UseFilters(IdExceptionFilter)
export class EmployeeAssetsController {
    constructor(private EmpService: EmployeeAssetsService) { }

    @Post()
    createEmpAsset(@Body() dto: EmployeeAssetDto) {
        return this.EmpService.createEmpAsset(dto)
    }

    @Get()
    async getAllAssets() {
        try {
            const getAllAssets = await this.EmpService.getAllAssets()
            if (getAllAssets) return getAllAssets;
            throw new DataNotFoundException()
        }
        catch {
            throw new NotFoundException('Assets Not Found')
        }
    }

    @Get(':id')
    async getAsset(@Param('id') id: string) {
        try {
            const getAsset = await this.EmpService.getEmpAssets(id)
            if (getAsset) return getAsset;
            throw new NotFoundException(`Employee Asset with #${id} was not found`)
        } catch {
            throw new DataNotFoundException()
        }
    }

    @Patch(':id')
    async updateEmpAsset(@Param('id') id: string, @Body() dto: EmployeeAssetDto) {
        try {
            const updateEmpAsset = this.EmpService.updateEmpAsset(id, dto)
            if (updateEmpAsset) return updateEmpAsset;
            throw new NotFoundException(`Employee Asset with #${id} was not found`)
        } catch {
            throw new DataNotFoundException()
        }
    }
}

