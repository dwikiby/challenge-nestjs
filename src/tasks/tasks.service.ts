import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus, Task } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { take } from 'rxjs';
import { GetTaskStatusFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = []; // bikin variabel tasks yang memanggil objek Task

    // getAllTask() {
    //     return this.tasks;
    // }

    getAllTask(): Task[] {
        return this.tasks;
    }
    getTaskWithFilter(filterDto: GetTaskStatusFilterDto): Task[] {
        const { status, search } = filterDto;
        //deklarasi sebuah array untuk menampung nilai temporary.
        let tasks = this.getAllTask();

        if (status) {
            tasks = tasks.filter((task) => task.status === status);
        }

        //seleksi untuk search
        if (search) {
            tasks = tasks.filter((task) => {

                if (task.title.includes(search) || task.description.includes(search)) {
                    return true;
                }

                return false;
            });
        }
        return tasks;
    }

    /*
    createTask(title:string, description:string) : Task{
        const task : Task = {
            id:uuid(),
            title,
            description,
            status: TaskStatus.OPEN //default TaskStatus Open
        };
        this.tasks.push(task);
        return task;
    }
    */

    createTask(createTaskDTO: CreateTaskDTO): Task { // createTaskDTO = variabel, CreateTaskDTO = objek
        const {
            title, description
        } = createTaskDTO;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN //default TaskStatus Open
        };
        this.tasks.push(task);
        return task;
    }
    getTaskById(id: string): Task {  //get task by id
        // return this.tasks.find((tasks) => tasks.id === id);
        const found = this.tasks.find((task) => task.id === id); // untuk mencari id data
        if (!found) { // apabila tidak ditemukan, tampilkan error
            throw new NotFoundException('Task not found');
        }
        return found; // id cocok, tampilkan data
    }

    deleteTask(id: string): void { // delete data
        // this.tasks = this.tasks.filter((task) => task.id !== id)
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter((task) => task.id !== found.id);
    }

    updateTaskStatus(id: string, title: string, description: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.title = title;
        task.description = description;
        task.status = status;
        return task;
    }
}

