import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ChallengeModule } from './challenge/challenge.module';

@Module({
  imports: [TasksModule, ChallengeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
