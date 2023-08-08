import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorStatusCode } from 'src/enum/enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssetDto } from '../dtos/Asset.Dto';

@Injectable()
export class AssetService {
    constructor(private prisma: PrismaService) { }

    async createAssets(data: Prisma.AssetCreateInput) {
        if (data.warranty > 0) {
            var newWarranty = data.warranty * 12
        }
        try {
            const assets = await this.prisma.asset.create({
                data: {
                    ...data,
                    warranty: newWarranty
                }
            })
            return assets
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === ErrorStatusCode.P2Error) {
                    return new HttpException('Credentials taken', HttpStatus.FORBIDDEN);
                }
            }
            throw error;
        }
    }

    getAllAssets() {
        return this.prisma.asset.findMany({
            where: { deletedAt: null }
        })
    }

    getAsset(id: string) {
        const where = { id: id, deletedAt: null };
        return this.prisma.asset.findFirst({
            where: where
        })
    }

    updateAsset(id: string, assetDto: AssetDto) {
        return this, this.prisma.asset.update({
            where: { id: id },
            data: assetDto
        })
    }

    deleteAsset(id: string) {
        const deleteAsset = { deletedAt: new Date() };
        return this.prisma.asset.update({
            where: { id: id },
            data: deleteAsset
        })
    }
}
