import { IsNotEmpty } from "class-validator"

export class CreateGuestDTO {
    @IsNotEmpty() //field harus sesuai dengan enum
    full_name: string;

    @IsNotEmpty()
    no_hp: number;

    @IsNotEmpty()
    alamat: string;

    @IsNotEmpty()
    tujuan_kunjungan: string;

}