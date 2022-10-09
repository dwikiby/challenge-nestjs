import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guest {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    hp: number
}
