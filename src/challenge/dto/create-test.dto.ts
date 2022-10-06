import { IsNotEmpty } from "class-validator"

export class CreateTestDTO {
    @IsNotEmpty()
    full_name: string;

    @IsNotEmpty()
    motto: string;

    @IsNotEmpty()
    cv: string;
}