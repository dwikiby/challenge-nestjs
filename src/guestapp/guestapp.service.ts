import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Guest, genderStatus, status } from './guestapp.model'
import { CreateGuestDTO } from './dto/create-guest.dto'
import { GetGuestStatusFilterDto } from './dto/get-guest.filter.dto';

@Injectable()
export class GuestappService {
    private guests: Guest[] = []; // bikin variabel tasks yang memanggil objek Task

    getAllGuest() {
        return this.guests;
    }

    getGuestWithFilter(filterDto: GetGuestStatusFilterDto): Guest[] {
        const { gender, search } = filterDto;

        let guests = this.getAllGuest()

        //seleksi gender
        if (gender) {
            guests = guests.filter((guest) => guest.gender === gender);
        }
        if (search) {
            guests = guests.filter((guest) => {
                if (guest.full_name.includes(search) || guest.alamat.includes(search)) {

                }

                return false;
            });

        }
        return guests;
    }

    createGuest(createGuestDTO: CreateGuestDTO): Guest {
        const {
            full_name, alamat, no_hp, tujuan_kunjungan
        } = createGuestDTO;

        const guest: Guest = {
            id: uuid(),
            full_name,
            no_hp,
            alamat,
            tujuan_kunjungan,
            gender: genderStatus.PRIA,
            status: status.PEGAWAI,
        };
        this.guests.push(guest);
        return guest;

    }

    getGuestById(id: string): Guest {
        const found = this.guests.find((guest) => guest.id === id);
        if (!found) {
            throw new NotFoundException('Task not Found');
        }
        return found;
    }

    updateGuestStatus(
        id: string,
        full_name: string,
        no_hp: number,
        alamat: string,
        tujuan_kunjungan: string,
        gender: genderStatus,
        status: status) {
        const guest = this.getGuestById(id);
        guest.full_name = full_name;
        guest.no_hp = no_hp;
        guest.alamat = alamat;
        guest.tujuan_kunjungan = tujuan_kunjungan;
        guest.gender = gender;
        guest.status = status;
        return guest;
    }

    deleteGuest(id: string): void {
        const found = this.getGuestById(id);
        this.guests = this.guests.filter((guest) => guest.id !== found.id);
    }
}


