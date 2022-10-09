export interface Hotel {
    id: string,
    hotel_name: string,
    contact: number,
    alamat: string,
    bintang: number,
    description: string,
    hotel_status
}

export enum HotelStatus {
    SWASTA = 'SWASTA',
    BUMN = 'BUMN',
}