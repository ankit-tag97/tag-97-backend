import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './role/role.module';
import { EmployeeRoleModule } from './employee-role/employee-role.module';
import { ClientModule } from './client/client.module';
import { PrismaModule } from './prisma/prisma.module';
import { AssetsModule } from './assets/assets.module';
import { EmployeeAssetsModule } from './employee-assets/employee-assets.module';
import { EmployeeInvoiceModule } from './employee-invoice/employee-invoice.module';
import { LeaveModule } from './leave/leave.module';
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
    EmployeeInvoiceModule,
    LeaveModule,
  ],
  controllers: [],
  // providers: [{ provide: APP_FILTER, useClass: AppExceptionFiler }],
})
export class AppModule { }
