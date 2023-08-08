import { Module } from '@nestjs/common';
import { LeaveController } from './controller/leave/leave.controller';
import { LeaveService } from './service/leave/leave.service';

@Module({
  controllers: [LeaveController],
  providers: [LeaveService]
})
export class LeaveModule {}
