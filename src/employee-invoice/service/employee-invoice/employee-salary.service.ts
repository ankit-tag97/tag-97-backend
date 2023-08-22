import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SalaryDto } from '../../dtos/employee-salary.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SalaryService {
    constructor(private prisma: PrismaService) { }

    async generateSalary(data: Prisma.EmployeeSalarySlipCreateManyInput) {

        const year = new Date().getFullYear()
        const month = new Date().getMonth() + 1

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0); // Last day of the month

        let workingDays = 0;

        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude Sunday and Saturday
                workingDays++;
            }
        }

        const hourlyRate = ((data.basicSalary / workingDays) / 9)  // calculate hourlyRate

        const overTime = (data.overTime * hourlyRate)
        const absent = (data.absent * hourlyRate)
        const securityAmount = (data.securityAmount = data.basicSalary * 0.1)
        const paidLeave = absent > 0 ? (data.basicSalary - (data.basicSalary / workingDays)) : data.basicSalary + (data.basicSalary / workingDays)

        const totalAmount = data.basicSalary + data.insentive + overTime - absent -
            data.professionalTax - securityAmount - paidLeave - data.advanceWithdrawal

        console.log(totalAmount);

        const totalDeductionAmount = absent + data.professionalTax +
            securityAmount + data.advanceWithdrawal

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
        } catch (error) {
            console.error(error)
            throw new HttpException('could not create invoice', HttpStatus.CONFLICT)
        }
    }

    async getAllSalary() {
        const getAllSalary = await this.prisma.employeeSalarySlip.findMany({
            where: { deletedAt: null }
        })
        if (getAllSalary) return getAllSalary
        throw new NotFoundException('Data Not Found')
    }

    async getById(id: string) {
        const where = { deletedAt: null, id: id }
        const getSalaryById = await this.prisma.employeeSalarySlip.findFirst({ where: where })
        if (getSalaryById) return getSalaryById
        throw new NotFoundException(`Data with this id"${id} was not found`)
    }

    updateSalary(id: string, dto: SalaryDto) {
        return this.prisma.employeeSalarySlip.updateMany({
            where: { id: id },
            data: dto
        })
    }

    deleteSalary(id: string) {
        const deleteSalary = { deletedAt: new Date() }
        return this.prisma.employeeSalarySlip.update({
            where: { id: id },
            data: deleteSalary
        })
    }
}
