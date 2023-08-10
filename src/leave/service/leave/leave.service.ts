import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LeaveDto } from 'src/leave/dtos/leave.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeaveService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.LeaveCreateManyInput) {
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
        const getAll = this.prisma.leave.findMany({ where: { deletedAt: null }, })
        if (!getAll) throw new NotFoundException('Data Not Found')
        return getAll;
    }

    getById(id: string) {
        const where = { id: id, deletedAt: null };
        const getById = this.prisma.leave.findFirst({ where: where })
        if (getById) return getById;
        throw new NotFoundException(`data with this #${id} was not found`)
    }

    updateLeave(id: string, data: Prisma.LeaveCreateManyInput) {
        const update = this.prisma.leave.update({ where: { id: id }, data })
        if (update) return update
        throw new NotFoundException(`data with this #${id} was not foumd`)
    }

    deleteLeave(id: string) {
        const deleteLeave = { deletedAt: new Date() }
        return this.prisma.leave.update({
            where: { id: id },
            data: deleteLeave
        })
    }
}
