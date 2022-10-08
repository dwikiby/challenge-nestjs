import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from './tasks-status.enum';

@Entity()
export class Task {
    //Primary
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //kolom title
    @Column()
    title: string;

    //kolom description
    @Column()
    description: string;

    @Column()
    status: TaskStatus;

}