import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { title } from 'process';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTask();
    }

    @Get('/:id') //method get data by id
    getTaskById(@Param('id')
    id: string
    ): Task {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id') //method delete data by id
    deleteTask(@Param('id') id: string): void {
        return this.tasksService.deleteTask(id);
    }
    @Patch('/:id/status') //method update data by id
    updateTastStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus,
    ): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }

    /*
    @Post()
    //createTask(@Body() body){
        //console.log('body', body);
        createTask(
            @Body('title') title : string,
            @Body('description') description : string,
        ): Task{
            console.log('title', title);
            console.log('description', description);
            return this.tasksService.createTask(title,description);
        }
    */
    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
        return this.tasksService.createTask(createTaskDTO);
    }
}
