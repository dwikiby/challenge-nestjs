import { Module } from '@nestjs/common';
import { AuthHotelController } from './auth-hotel.controller';
import { AuthHotelService } from './auth-hotel.service';
import { JwtStrategy } from './jwt.strategy';
import { Guest } from './guest.entity';
import { JwtModule } from '@nestjs/jwt'
import { GuestRepository } from './guest.repository';
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600 // dalam hitungan detik
      }
    }),
    TypeOrmModule.forFeature([Guest])],
  controllers: [AuthHotelController],
  providers: [AuthHotelService, GuestRepository, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthHotelModule { }
