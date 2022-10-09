import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeModule } from './challenge/challenge.module';
import { GuestappModule } from './guestapp/guestapp.module';
import { HotelappModule } from './hotelapp/hotelapp.module';
import { AuthModule } from './auth/auth.module';
import { AuthHotelModule } from './auth-hotel/auth-hotel.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    { // konfigurasi db
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hotelapp', //nama db hotelapp
      autoLoadEntities: true,
      logging: true,
      dropSchema: false,
      synchronize: true,
    }
  ), TasksModule, HotelappModule, AuthModule, AuthHotelModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
