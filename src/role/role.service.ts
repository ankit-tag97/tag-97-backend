import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeesDto } from 'src/employee/dto/employee.dto';
import { ErrorStatusCode } from 'src/enum/enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}
  async createRole(data: Prisma.RoleCreateInput) {
    try {
      const role = await this.prisma.role.create({
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === ErrorStatusCode.P2Error) {
          return new HttpException('Credentials taken', HttpStatus.FORBIDDEN);
        }
      }
      throw error;
    }
  }

  getRoles() {
    return this.prisma.role.findMany({
      where: { deletedAt: null },
    });
  }

  getRole(id: string) {
    const where = { id: id, deletedAt: null };
    return this.prisma.role.findFirst({
      where: where,
    });
  }

  updateRole(id: string, roleDto: RoleDto) {
    return this.prisma.role.update({
      where: { id: id },
      data: roleDto,
    });
  }

  deteleRole(id: string) {
    const deleteRole = { deletedAt: new Date() };
    return this.prisma.role.update({
      where: { id: id },
      data: deleteRole,
    });
  }
}
