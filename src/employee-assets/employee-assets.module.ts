import { Module } from '@nestjs/common';
import { EmployeeAssetsController } from './controller/employee-assets/employee-assets.controller';
import { EmployeeAssetsService } from './service/employee-assets/employee-assets.service';

@Module({
  controllers: [EmployeeAssetsController],
  providers: [EmployeeAssetsService]
})
export class EmployeeAssetsModule { }
