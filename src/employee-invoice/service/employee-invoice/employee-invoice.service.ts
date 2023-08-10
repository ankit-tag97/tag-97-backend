import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeInvoiceService {
    constructor(private prisma: PrismaService) { }

    async createInvoice(data: Prisma.EmployeeInvoiceCreateManyInput) {
        try {
            const createEmployeeInvoice = this.prisma.employeeInvoice.create({
                data
            })
            return createEmployeeInvoice
        } catch (error) {
            throw new HttpException('could not create invoice', HttpStatus.CONFLICT)
        }
    }

    async getAllInvoice() {
        const getAllInvoice = await this.prisma.employeeInvoice.findMany({
            where: { deletedAt: null }
        })
        if (getAllInvoice) return getAllInvoice
        throw new NotFoundException('Data Not Found')
    }

    async getById(id: string) {
        const where = { deletedAt: null, id: id }
        const getInvoiceById = await this.prisma.employeeInvoice.findFirst({ where: where })
        if (getInvoiceById) return getInvoiceById
        throw new NotFoundException(`Data with this id"${id} was not found`)
    }
}
