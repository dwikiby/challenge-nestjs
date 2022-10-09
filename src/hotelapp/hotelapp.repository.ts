import { CreateHotelDTO } from "./dto/create-hotelapp.dto";
import { Hotel } from "./hotelapp.entity";
import { HotelStatus } from "./hotelapp-status.enum";
import { DataSource, Repository } from "typeorm";

import { GetHotelStatusFilterDto } from "./dto/get-hotel-filter.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateHotelStatusDto } from "./dto/update-hotel-filter.dto";


// Promise = Future => yang akan dirunning ketika berhasil

@Injectable()
export class HotelRepository extends Repository<Hotel> {
    constructor(private dataSource: DataSource) {
        super(Hotel, dataSource.createEntityManager());
    }

    async createHotel(createHotel: CreateHotelDTO): Promise<Hotel> {
        const { hotel_name, contact, alamat, bintang, description } = createHotel;

        const hotel = await this.create({
            hotel_name,
            contact,
            alamat,
            bintang,
            description,
            hotel_status: HotelStatus.SWASTA,
        });

        await this.save(hotel);
        return hotel;
    }

    async getHotel(id: string): Promise<Object> {
        const data = await this.findOne({ where: { id } });
        if (!data) {
            throw new NotFoundException('Task not found');
        }
        console.log(data);
        return {
            status: 200,
            message: 'Ok',
            data: data
        }
    }

    async getHotelFilter(filterDto: GetHotelStatusFilterDto): Promise<Hotel[]> {
        const { hotel_status, search } = filterDto;
        const query = this.createQueryBuilder('hotel');

        if (hotel_status) {
            query.andWhere('hotel_status = :hotel_status', { hotel_status });
        }

        if (search) {
            query.andWhere(
                'LOWER(hotel.hotel_name) LIKE LOWER (:search) OR LOWER (hotel.hotel_status) LIKE LOWER(:search)',
                { search: `%${search}%` },
            );

            const hotel = await query.getMany();
            return hotel;
        }
    }

    async updateHotel(id: string, dataUpdate: UpdateHotelStatusDto): Promise<Object> {
        await this.update(id, dataUpdate);
        const data = await this.getHotel(id);
        return { data }
    }

    async deleteHotel(id: string): Promise<Object> {
        const data = await this.getHotel(id);
        const hotel = await this.delete(id);
        return {
            status: 200,
            message: 'data deleted'
        }
    }

}