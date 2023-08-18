import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeeSalaryDto } from '../../dtos/employee-salary.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class EmployeeSalaryService {
    constructor(private readonly prisma: PrismaService) { }

    async createInvoice(data: Prisma.EmployeeSalarySlipCreateManyInput) {
        const totalAmount = data.basicSalary + data.insentive +
            (data.overTime * ((data.basicSalary / 30) / 9)) -
            (data.absent * (data.basicSalary / 30) / 9) -
            data.professionalTax - (data.securityAmount * (1 * 0.1)) - data.paidLeave - data.advanceWithdrawal

        console.log(totalAmount);

        const totalDeductionAmount = (data.absent * (data.basicSalary / 30) / 9) +
            data.professionalTax +
            (data.securityAmount = data.basicSalary * (1 * 0.1)) +
            data.paidLeave +
            data.advanceWithdrawal

        console.log(totalDeductionAmount)

        try {
            const createEmployeeSalarySlip = await this.prisma.employeeSalarySlip.create({
                data: {
                    ...data,
                    totalDeduction: totalDeductionAmount,
                    netPay: totalAmount
                }
            })
            return createEmployeeSalarySlip
        } catch(error) {
            console.log(error);
            
            throw new HttpException('could not create invoice', HttpStatus.CONFLICT)
        }
    }

    async getAllInvoice() {
        const getAllInvoice = await this.prisma.employeeSalarySlip.findMany({
            where: { deletedAt: null }
        })
        if (getAllInvoice) return getAllInvoice
        throw new NotFoundException('Data Not Found')
    }

    async getById(id: string) {
        const where = { deletedAt: null, id: id }
        const getInvoiceById = await this.prisma.employeeSalarySlip.findFirst({ where: where })
        if (getInvoiceById) return getInvoiceById
        throw new NotFoundException(`Data with this id"${id} was not found`)
    }

    updateInvoice(id: string, dto: EmployeeSalaryDto) {
        return this.prisma.employeeSalarySlip.updateMany({
            where: { id: id },
            data: dto
        })
    }

    deleteInvoice(id: string) {
        const deleteInvoice = { deletedAt: new Date() }
        return this.prisma.employeeSalarySlip.update({
            where: { id: id },
            data: deleteInvoice
        })
    }
}
