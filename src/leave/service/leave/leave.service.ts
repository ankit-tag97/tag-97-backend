import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LeaveDto } from 'src/leave/dtos/leave.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeaveService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.LeaveCreateInput) {
        try {
            const createLeave = await this.prisma.leave.create({
                data
            })
            return createLeave;
        } catch {
            throw new HttpException('Something went wrong', HttpStatus.BAD_GATEWAY);
        }
    }

    getAllLeave() {
        const getAll = this.prisma.leave.findMany()
        if (!getAll) throw new NotFoundException('Data Not Found')
        return getAll;
    }

    getById(id: string) {
        const getById = this.prisma.leave.findFirst({ where: { id: id } })
        if (!getById) throw new NotFoundException(`data with this #${id} was not found`)
        return getById;
    }

    updateLeave(id: string, dto: LeaveDto) {
        const updat = this.prisma.leave.update({ where: { id: id }, data: dto })
        if (!updat) throw new NotFoundException(`data with this #${id} was not foumd`)
        return updat
    }

    deleteLeave(id: string) {
        return this.prisma.leave.delete({ where: { id: id } })
    }
}
