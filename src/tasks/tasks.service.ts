import { Injectable } from '@nestjs/common';
import { TaskStatus, Task } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { take } from 'rxjs';

@Injectable()
export class TasksService {
    private tasks: Task[] = []; // bikin variabel tasks yang memanggil objek Task

    getAllTask() {
        return this.tasks;
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
        return this.tasks.find((tasks) => tasks.id === id);
    }

    deleteTask(id: string): void { // delete data
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}

