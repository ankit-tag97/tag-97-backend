import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeeAssetDto } from 'src/employee-assets/dto/employee-asset.dto';
import { ErrorStatusCode } from 'src/enum/enum';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeAssetsService {
    constructor(private prisma: PrismaService) { }

    async createEmpAsset(data: EmployeeAssetDto) {
        try {
            const createEmpAsset = await this.prisma.employeeAsset.create({
                data
            })
            return createEmpAsset;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === ErrorStatusCode.P2Error) {
                    return new HttpException('Credentials taken', HttpStatus.FORBIDDEN);
                }
            }
            throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
        }
    }

    getAllAssets() {
        const getAllAssets = this.prisma.employeeAsset.findMany()
        if (!getAllAssets) throw new NotFoundException('Employee Asset Not Found')
        return getAllAssets
    }

    getEmpAssets(id: string) {
        const getEmpAsset = this.prisma.employeeAsset.findFirst({
            where: { id: id }
        })
        if (!getEmpAsset) throw new NotFoundException(`Employee Asset with id #${id} was not found`)
        return getEmpAsset
    }

    updateEmpAsset(id: string, empAssetDto: EmployeeAssetDto) {
        return this.prisma.employeeAsset.update({
            where: { id: id },
            data: empAssetDto
        })
    }
}
