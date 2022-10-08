import { CreateTaskDTO } from "./dto/create-task.dto";
import { Task } from "./tasks.entity";
import { TaskStatus } from "./tasks-status.enum";
import { DataSource, Repository, EntityRepository } from 'typeorm';

import { GetTaskStatusFilterDto } from "./dto/get-tasks-filter.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateTaskStatusDto } from "./dto/update-task-filter.dto";

//Promise = Future => dirunning setelah berhasil
@Injectable()
export class TaskRepository extends Repository<Task> {
    constructor(private dataSource: DataSource) {
        super(Task, dataSource.createEntityManager());
    }

    async createTask(createTaskDto: CreateTaskDTO): Promise<Task> {
        const { title, description } = createTaskDto;

        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN //Default
        });

        await this.save(task);
        return task;
    }

    async getTask(id: string): Promise<Object> {
        const data = await this.findOne({ where: { id } });
        if (!data) {
            throw new NotFoundException('Task not Found');
        }
        console.log(data);
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }


    async getTaskFilter(filterDto: GetTaskStatusFilterDto): Promise<Task[]> { // method filter
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');

        if (status) {
            query.andWhere('task.status = :status', { status });
        }

        if (search) {
            query.andWhere(
                'LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)',
                { search: `%${search}%` },
            );

            const tasks = await query.getMany();
            return tasks;
        }
    }

    async updateTask(id: string, dataUpdate: UpdateTaskStatusDto): Promise<Object> {
        await this.update(id, dataUpdate);
        const data = await this.getTask(id);
        return { data }
    }

    async deleteTask(id: string): Promise<Object> {
        const data = await this.getTask(id);
        const task = await this.delete(id);
        return {
            status: 200,
            message: 'OK'
        }

    }
}