import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { v4 as uuid } from 'uuid';
import { HotelStatus, Hotel } from './hotelapp-status.enum';
import { CreateHotelDTO } from './dto/create-hotelapp.dto';
import { GetHotelStatusFilterDto } from './dto/get-hotel-filter.dto';
import { UpdateHotelStatusDto } from './dto/update-hotel-filter.dto';
import { HotelRepository } from './hotelapp.repository';

@Injectable()
export class HotelappService {
    constructor(
        @InjectRepository(HotelRepository)
        private hotelRepository: HotelRepository,
    ) { }

    getHotel(filterDto: GetHotelStatusFilterDto): Promise<Hotel[]> {
        return this.hotelRepository.getHotelFilter(filterDto);
    }

    async showAll() {
        return this.hotelRepository.find();
    }

    async getHotelById(id: string): Promise<Hotel> {
        //find one (id)
        const found = await this.hotelRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!found) {
            throw new NotFoundException('Task Not Found');

        }
        return found; // id cocok
    }

    createHotel(createHotel: CreateHotelDTO): Promise<Hotel> {
        return this.hotelRepository.createHotel(createHotel);
    }

    async updateHotel(id: string, data: UpdateHotelStatusDto): Promise<Object> {
        return this.hotelRepository.updateHotel(id, data);
    }

    async deleteHotel(id: string): Promise<Object> {
        return this.hotelRepository.deleteHotel(id);
    }
}
