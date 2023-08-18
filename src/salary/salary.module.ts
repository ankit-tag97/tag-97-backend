import { Module } from '@nestjs/common';
import { SalaryService } from './service/salary/salary.service';
import { SalaryController } from './controller/salary.controller';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService]
})
export class SalaryModule { }
