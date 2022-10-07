import { Module } from '@nestjs/common';
import { GuestappController } from './guestapp.controller';
import { GuestappService } from './guestapp.service';

@Module({
  controllers: [GuestappController],
  providers: [GuestappService]
})
export class GuestappModule {}
