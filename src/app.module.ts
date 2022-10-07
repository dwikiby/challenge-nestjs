import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ChallengeModule } from './challenge/challenge.module';
import { GuestappModule } from './guestapp/guestapp.module';

@Module({
  imports: [TasksModule, ChallengeModule, GuestappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
