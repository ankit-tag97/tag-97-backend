import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalaryService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.salaryCreateManyInput) {
        try {
            const createSalary = await this.prisma.salary.createMany({
                data
            })
            return createSalary
        } catch {
            throw new HttpException('could not create salary', HttpStatus.CONFLICT)
        }
    }

    async findAll() {
        const findAllSalary = await this.prisma.salary.findMany({
            where: { deletedAt: null }
        })
        if (findAllSalary) return findAllSalary
        throw new NotFoundException('Data Not Found')
    }

    async getSalaryById(id: string) {
        const where = { deletedAt: null, id: id }
        const getSalaryById = this.prisma.salary.findFirst({ where: where })
        if (getSalaryById) return getSalaryById
        throw new NotFoundException(`Data with this id"${id} was not found`)
    }

    updateSalary(id: string, data: Prisma.salaryCreateManyInput) {
        return this.prisma.salary.update({
            where: { id: id },
            data
        })
    }

    deleteSalary(id: string) {
        const deleteSalary = { deletedAt: new Date() }
        return this.prisma.salary.update({
            where: { id: id },
            data: deleteSalary
        })
    }
}
