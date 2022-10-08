import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeModule } from './challenge/challenge.module';
import { GuestappModule } from './guestapp/guestapp.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    { // konfigurasi db
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'task_management',
      autoLoadEntities: true,
      logging: true,
      dropSchema: false,
      synchronize: true,
    }
  ), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
