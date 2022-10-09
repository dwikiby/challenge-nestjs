import { IsEnum } from "class-validator";
import { HotelStatus } from "../hotelapp-status.enum";

export class UpdateHotelStatusDto {
    @IsEnum(HotelStatus)
    hotel_status: HotelStatus;
}