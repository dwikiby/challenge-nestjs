import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks-status.enum';
import { title } from 'process';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskStatusFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-filter.dto';
import { AuthGuard } from '@nestjs/passport'


@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get() //method get data all
    getAllTask() {
        return this.tasksService.showAll();
    }

    @Get()
    getTasks(@Query() filterDto: GetTaskStatusFilterDto): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto);
    }

    @Get('/:id')
    getTasksById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTasksById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDTO): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Patch('/:id/status')
    updateTask(@Param('id') id: string, @Body() data: UpdateTaskStatusDto): Object {
        return this.tasksService.updateTask(id, data);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): Object {
        return this.tasksService.deleteTask(id);
    }


    //// method dibawah tanpa menggunakan database.
    // @Get()
    // getAllTasks(): Task[] {
    //     return this.tasksService.getAllTask();
    // }

    // @Get()
    // getAllTasks(@Query() filterDto: GetTaskStatusFilterDto): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getTaskWithFilter(filterDto);
    //     } else {
    //         return this.tasksService.getAllTask();
    //     }
    // }

    // @Get('/:id') //method get data by id
    // getTaskById(@Param('id')
    // id: string
    // ): Task {
    //     return this.tasksService.getTaskById(id);
    // }

    // @Delete('/:id') //method delete data by id
    // deleteTask(@Param('id') id: string): void {
    //     return this.tasksService.deleteTask(id);
    // }
    // @Patch('/:id') //method update data by id
    // updateTastStatus(
    //     @Param('id') id: string,
    //     @Body('title') title: string,
    //     @Body('description') description: string,
    //     // @Body('status') status: TaskStatus,
    //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    // ): Task {
    //     const { status } = updateTaskStatusDto;
    //     return this.tasksService.updateTaskStatus(id, title, description, status);
    // }

    // /*
    // @Post()
    // //createTask(@Body() body){
    //     //console.log('body', body);
    //     createTask(
    //         @Body('title') title : string,
    //         @Body('description') description : string,
    //     ): Task{
    //         console.log('title', title);
    //         console.log('description', description);
    //         return this.tasksService.createTask(title,description);
    //     }
    // */
    // @Post()
    // createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    //     return this.tasksService.createTask(createTaskDTO);
    // }
}
