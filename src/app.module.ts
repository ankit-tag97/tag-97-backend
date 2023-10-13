import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './role/role.module';
import { EmployeeRoleModule } from './employee-role-mapping/employee-role.module';
import { ClientModule } from './client/client.module';
import { PrismaModule } from './prisma/prisma.module';
import { AssetsModule } from './assets/assets.module';
import { EmployeeAssetsModule } from './employee-assets/employee-assets.module';
import { LeaveModule } from './leave/leave.module';
import { SalaryModule } from './salary/salary.module';
import { EmployeeSalaryModule } from './employee-invoice/employee-salary.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EmployeeModule,
    PrismaModule,
    EmployeeModule,
    RoleModule,
    EmployeeRoleModule,
    ClientModule,
    AssetsModule,
    EmployeeAssetsModule,
    EmployeeSalaryModule,
    LeaveModule,
    SalaryModule,
  ],
  // providers: [{ provide: APP_FILTER, useClass: AppExceptionFiler }],
})
export class AppModule { }
