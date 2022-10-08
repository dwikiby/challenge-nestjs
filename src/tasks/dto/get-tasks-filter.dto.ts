import { IsEnum, IsOptional, IsString } from "class-validator"
import { TaskStatus } from "../tasks-status.enum"

export class GetTaskStatusFilterDto {

    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    search?: string;
}