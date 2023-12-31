import { ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ErrorStatusCode } from 'src/enum/enum';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2'
import { LoginDto } from '../dto/login.dto';
import { updateEmployeeId } from '../dto/updateEmployee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService, private config: ConfigService, private jwt: JwtService) { }

  async createEmployee(data: Prisma.EmployeesCreateManyInput) {
    const hashPassword = await argon.hash(data.password)
    try {
      const employee = await this.prisma.employees.create({
        data: {
          ...data,
          password: hashPassword
        }
      });
      return employee;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === ErrorStatusCode.P2Error) {
          return new HttpException('Credentials taken', HttpStatus.FORBIDDEN);
        }
      }
      throw error;
    }
  }

  // LOGIN
  async sigin(dto: LoginDto) {
    const auth = await this.prisma.employees.findFirst({
      where: { companyEmail: dto.companyEmail }
    });

    if (!auth) {
      throw new ForbiddenException('credential incorrect');
    }

    const passwordMatch = await argon.verify(auth.password, dto.password);

    if (!passwordMatch) {
      throw new ForbiddenException('credential incorrect');
    }
    return "Login successful";
  }

  //ASIGN TOKEN
  async sigingToken(userId: string, email: string): Promise<{ access_token }> {
    const payload = {
      sub: userId,
      email
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      secret: secret
    });
    return ({
      access_token: token
    })
  }

  getAllEmployee() {
    return this.prisma.employees.findMany({
      where: { deletedAt: null },
    });
  }

  getEmployee(id: string) {
    const where = { id: id, deletedAt: null };
    return this.prisma.employees.findFirst({ where: where });
  }

  async updateEmployeeId(id: string, employeeDto: updateEmployeeId) {
    const update = await this.prisma.employees.findFirst({
      where: { employeeId: employeeDto.employeeId }
    });
    if (update) {
      throw new HttpException(`Employee with this ${employeeDto.employeeId} already exist`, HttpStatus.FORBIDDEN)
    } else {
      return this.prisma.employees.update({
        where: { id: id },
        data: employeeDto
      })
    }
  }

  updateEmployeeDetails(id: string, data: Prisma.EmployeesUpdateInput) {
    const updateDetail = this.prisma.employees.update({
      where: { id: id },
      data
    })
    if (updateDetail) return updateDetail;
    throw new NotFoundException(`data with this id "${id}" was not found`)
  }

  deleteEmployee(id: string) {
    const deleteEmployee = { deletedAt: new Date() };
    return this.prisma.employees.update({
      where: { id: id },
      data: deleteEmployee,
    });
  }
}
