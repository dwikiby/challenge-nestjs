import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { Task } from './tasks.entity'
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
  imports: [AuthModule, TypeOrmModule.forFeature([Task])]
})
export class TasksModule { }
