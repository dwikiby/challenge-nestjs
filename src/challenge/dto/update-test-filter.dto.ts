import { IsEnum, IsNotEmpty } from "class-validator";
import { genderStatus } from "../challenge.model";

export class UpdateTestStatusDto {

    @IsNotEmpty() //field tidak boleh kosong
    full_name: string;

    @IsNotEmpty()
    motto: string;

    @IsNotEmpty()
    cv: string;

    @IsEnum(genderStatus) //field harus sesuai dengan enum
    gender: genderStatus;
}