import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { Hotel, HotelStatus } from './hotelapp-status.enum';
import { UpdateHotelStatusDto } from './dto/update-hotel-filter.dto';
import { GetHotelStatusFilterDto } from './dto/get-hotel-filter.dto';
import { CreateHotelDTO } from './dto/create-hotelapp.dto';
import { HotelappService } from './hotelapp.service';
import { AuthGuard } from '@nestjs/passport'


@Controller('hotelapp')
@UseGuards(AuthGuard())
export class HotelappController {
    constructor(private hotelService: HotelappService) { }


    @Get() // method get data all
    getAllHotel() {
        return this.hotelService.showAll();
    }

    @Get()
    getHotel(@Query() filterDto: GetHotelStatusFilterDto): Promise<Hotel[]> {
        return this.hotelService.getHotel(filterDto);
    }

    @Get('/:id')
    getHotelById(@Param('id') id: string): Promise<Hotel> {
        return this.hotelService.getHotelById(id);
    }

    @Post()
    createHotel(@Body() createHotel: CreateHotelDTO): Promise<Hotel> {
        return this.hotelService.createHotel(createHotel);

    }

    @Patch('/:id/status')
    updateHotel(@Param('id') id: string, @Body() data: UpdateHotelStatusDto): Object {
        return this.hotelService.updateHotel(id, data);
    }

    @Delete('/:id')
    deleteHotel(@Param('id') id: string): Object {
        return this.hotelService.deleteHotel(id);
    }
}
