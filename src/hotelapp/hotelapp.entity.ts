import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { HotelStatus } from "./hotelapp-status.enum";

@Entity()
export class Hotel {
    //primary
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //kolom name
    @Column()
    hotel_name: string;

    @Column()
    contact: number;

    @Column()
    alamat: string;

    @Column()
    bintang: number;

    @Column()
    description: string;

    @Column()
    hotel_status: HotelStatus;
}