import { Body, Controller, Get, Post, Param, ValidationPipe, Patch, Delete } from '@nestjs/common';
import { AssetService } from '../service/asset.service';
import { AssetDto } from '../dtos/Asset.Dto';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';

@Controller('assets')
export class AssetController {
    constructor(private assetService: AssetService) { }

    @Post('/create')
    createAsset(@Body(ValidationPipe) dto: AssetDto) {
        return this.assetService.createAssets(dto)
    }

    @Get()
    async getAssets() {
        try {
            const getAssets = await this.assetService.getAllAssets()
            if (getAssets) return getAssets;
            throw new DataNotFoundException()
        }
        catch {
            throw new DataNotFoundException()
        }
    }

    @Get(':id')
    async getAsset(@Param('id') id: string) {
        try {
            const asset = await this.assetService.getAsset(id)
            if (asset) return asset;
            throw new DataNotFoundException()

        }
        catch {
            throw new DataNotFoundException()
        }
    }

    @Patch('/update/:id')
    async updateAsset(@Param('id') id: string, @Body() updateDto: AssetDto) {
        try {
            const updateAsset = await this.assetService.updateAsset(id, updateDto)
            if (updateAsset) return updateAsset;
            throw new DataNotFoundException()
        } catch {
            throw new DataNotFoundException()
        }
    }

    @Delete(':id')
    async deleteAsset(@Param('id') id: string) {
        try {
            const deleteAsset = await this.assetService.deleteAsset(id)
            if (deleteAsset) return deleteAsset;
            throw new DataNotFoundException()
        } catch {
            throw new DataNotFoundException()
        }
    }
}
