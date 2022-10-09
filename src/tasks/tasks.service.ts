import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TaskStatus, Task } from './tasks-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { async, take } from 'rxjs';
import { GetTaskStatusFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './tasks.repository';
import { UpdateTaskStatusDto } from './dto/update-task-filter.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) { }

    getTasks(filterDto: GetTaskStatusFilterDto): Promise<Task[]> {
        return this.taskRepository.getTaskFilter(filterDto);
    }

    async showAll() {
        return this.taskRepository.find();
    }

    async getTasksById(id: string): Promise<Task> {
        // find one (id)
        const found = await this.taskRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!found) { // apabila tidak ditemukan, tampilkan error
            throw new NotFoundException('Task not found');
        }
        return found; // id cocok, tampilkan data
    }


    createTask(createTaskDto: CreateTaskDTO): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async updateTask(id: string, data: UpdateTaskStatusDto): Promise<Object> {
        return this.taskRepository.updateTask(id, data);
    }

    async deleteTask(id: string): Promise<Object> {
        return this.taskRepository.deleteTask(id);
    }


    // method di bawah tanpa menggunakan database.
    // private tasks: Task[] = []; // bikin variabel tasks yang memanggil objek Task

    // // getAllTask() {
    // //     return this.tasks;
    // // }

    // getAllTask(): Task[] {
    //     return this.tasks;
    // }
    // getTaskWithFilter(filterDto: GetTaskStatusFilterDto): Task[] {
    //     const { status, search } = filterDto;
    //     //deklarasi sebuah array untuk menampung nilai temporary.
    //     let tasks = this.getAllTask();

    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }

    //     //seleksi untuk search
    //     if (search) {
    //         tasks = tasks.filter((task) => {

    //             if (task.title.includes(search) || task.description.includes(search)) {
    //                 return true;
    //             }

    //             return false;
    //         });
    //     }
    //     return tasks;
    // }

    // /*
    // createTask(title:string, description:string) : Task{
    //     const task : Task = {
    //         id:uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN //default TaskStatus Open
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }
    // */

    // createTask(createTaskDTO: CreateTaskDTO): Task { // createTaskDTO = variabel, CreateTaskDTO = objek
    //     const {
    //         title, description
    //     } = createTaskDTO;

    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN //default TaskStatus Open
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }
    // getTaskById(id: string): Task {  //get task by id
    //     // return this.tasks.find((tasks) => tasks.id === id);
    //     const found = this.tasks.find((task) => task.id === id); // untuk mencari id data
    //     if (!found) { // apabila tidak ditemukan, tampilkan error
    //         throw new NotFoundException('Task not found');
    //     }
    //     return found; // id cocok, tampilkan data
    // }

    // deleteTask(id: string): void { // delete data
    //     // this.tasks = this.tasks.filter((task) => task.id !== id)
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
    // }

    // updateTaskStatus(id: string, title: string, description: string, status: TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.title = title;
    //     task.description = description;
    //     task.status = status;
    //     return task;
    // }
}

