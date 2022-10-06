export interface Task {
    //deklarasi data yang akan ditampung
    id: string,
    title: string,
    description: string,
    status
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}