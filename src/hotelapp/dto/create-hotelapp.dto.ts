import { IsNotEmpty } from "class-validator"

export class CreateHotelDTO {

    @IsNotEmpty()
    hotel_name: string;

    @IsNotEmpty()
    contact: number;

    @IsNotEmpty()
    alamat: string;

    @IsNotEmpty()
    bintang: number;

    @IsNotEmpty()
    description: string;
}