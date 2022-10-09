import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelappController } from './hotelapp.controller';
import { HotelappService } from './hotelapp.service';
import { HotelRepository } from './hotelapp.repository';
import { Hotel } from './hotelapp.entity';
import { AuthHotelModule } from 'src/auth-hotel/auth-hotel.module';

@Module({
  controllers: [HotelappController],
  providers: [HotelappService, HotelRepository],
  imports: [AuthHotelModule, TypeOrmModule.forFeature([Hotel])]
})
export class HotelappModule { }
