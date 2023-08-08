import { Module } from '@nestjs/common';
import { EmployeeController } from './employee-controller/employee.controller';
import { EmployeeService } from './employee-service/employee.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule { }
