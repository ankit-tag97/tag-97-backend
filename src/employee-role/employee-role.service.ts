import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeRoleService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployeeRole(data: Prisma.EmployeeRoleUncheckedCreateInput) {
    try {
      const employeeRole = await this.prisma.employeeRole.create({ data });
      return employeeRole;
    } catch (error) {
      console.log(error);
    }
  }
}
