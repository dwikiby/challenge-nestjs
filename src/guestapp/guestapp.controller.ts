import { genderStatus, status, Guest } from './guestapp.model';
import { UpdateGuestStatus } from './dto/update-guest.dto';
import { GetGuestStatusFilterDto } from './dto/get-guest.filter.dto';
import { CreateGuestDTO } from './dto/create-guest.dto';
import { GuestappService } from './guestapp.service';
import { Body, Controller, Get, Post, Param, Delete, Patch, Query } from '@nestjs/common';

@Controller('guestapp')
export class GuestappController {
    constructor(private guestService: GuestappService) { }

    @Get()
    getAllGuests(@Query() filterDto: GetGuestStatusFilterDto): Guest[] {
        if (Object.keys(filterDto).length) {
            return this.guestService.getGuestWithFilter(filterDto);
        } else {
            return this.guestService.getAllGuest();
        }
    }

    @Get('/:id') //method get data by id
    getGuestById(@Param('id')
    id: string
    ): Guest {
        return this.guestService.getGuestById(id);
    }

    @Delete('/:id') // method delete 
    deleteGuest(@Param('id') id: string): void {
        return this.guestService.deleteGuest(id);
    }

    @Post()
    createGuest(@Body() createGuestDto: CreateGuestDTO): Guest {
        return this.guestService.createGuest(createGuestDto);
    }

    @Patch('/:id') //method update data
    updateGuestStatus(
        @Param('id') id: string,
        @Body('full_name') full_name: string,
        @Body('no_hp') no_hp: number,
        @Body('alamat') alamat: string,
        @Body('tujuan_kunjungan') tujuan_kunjungan: string,
        @Body() updateGuestStatusDto: UpdateGuestStatus,

    ): Guest {
        const { gender, status } = updateGuestStatusDto;
        return this.guestService.updateGuestStatus(id, full_name, no_hp, alamat, tujuan_kunjungan, gender, status);
    }
}
