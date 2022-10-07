import { IsNotEmpty } from "class-validator"

export class CreateTestDTO {
    @IsNotEmpty() //field harus sesuai dengan enum
    full_name: string;

    @IsNotEmpty()
    motto: string;

    @IsNotEmpty()
    cv: string;
}