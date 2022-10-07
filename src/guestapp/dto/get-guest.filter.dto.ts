import { IsEnum, IsOptional, IsString } from "class-validator"
import { Guest, genderStatus, status } from "../guestapp.model"

export class GetGuestStatusFilterDto {
    @IsOptional()
    @IsEnum(genderStatus)
    gender?: genderStatus; //tanda '?' adalah nulllabel.


    @IsOptional()
    @IsString()
    search?: string;
}