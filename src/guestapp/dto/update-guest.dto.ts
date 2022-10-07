import { IsNotEmpty, IsEnum } from "class-validator"
import { genderStatus, status } from "../guestapp.model";

export class UpdateGuestStatus {
    @IsNotEmpty() //field harus sesuai dengan enum
    full_name: string;

    @IsNotEmpty()
    alamat: string;

    @IsNotEmpty()
    no_hp: number;

    @IsNotEmpty()
    tujuan_kunjungan: string;

    @IsEnum(genderStatus) //field harus sesuai dengan enum
    gender: genderStatus;

    @IsEnum(status) //field harus sesuai dengan enum
    status: status;
}