import { IsEnum } from "class-validator";
import { genderStatus } from "../challenge.model";

export class UpdateTestStatusDto {
    @IsEnum(genderStatus)
    gender: genderStatus;
}