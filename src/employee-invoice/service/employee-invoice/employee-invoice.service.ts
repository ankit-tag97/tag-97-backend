import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmployeeInvoice, Prisma } from '@prisma/client';
import { ErrorStatusCode } from 'src/enum/enum';
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
            console.error('Error creating employee:', error);
            throw new Error('Could not create employee');
        }
    }
}
