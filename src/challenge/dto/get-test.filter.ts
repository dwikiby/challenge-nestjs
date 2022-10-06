import { IsEnum, IsOptional, IsString } from "class-validator"
import { genderStatus, Test } from '../challenge.model';


export class GetTestStatusFilterDto {
    @IsOptional()
    @IsEnum(genderStatus)
    gender?: genderStatus; //tanda '?' adalah nulllabel.

    @IsOptional()
    @IsString()
    search?: string;
}
