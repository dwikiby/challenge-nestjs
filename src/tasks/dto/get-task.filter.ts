import { TaskStatus } from "../tasks.model";

export class GetTaskStatusFilterDto {
    status?: TaskStatus; //tanda '?' adalah nulllabel.
    search?: string;
}