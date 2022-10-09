import { IsEnum, IsOptional, IsString } from "class-validator"
import { Hotel, HotelStatus } from "../hotelapp-status.enum"

export class GetHotelStatusFilterDto {

    @IsOptional()
    @IsEnum(HotelStatus)
    hotel_status?: HotelStatus;

    @IsOptional()
    @IsString()
    search?: string;
}