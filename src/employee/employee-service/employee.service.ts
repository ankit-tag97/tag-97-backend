import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ErrorStatusCode } from 'src/enum/enum';
import { EmployeesDto } from '../dto/employee.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2'
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService, private config: ConfigService, private jwt: JwtService) { }

  async createEmployee(data: Prisma.EmployeesCreateInput) {
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

  updateEmployee(id: string, employeeDto: EmployeesDto) {
    return this.prisma.employees.update({
      where: { id: id },
      data: employeeDto,
    });
  }

  deleteEmployee(id: string) {
    const deleteEmployee = { deletedAt: new Date() };
    return this.prisma.employees.update({
      where: { id: id },
      data: deleteEmployee,
    });
  }
}
