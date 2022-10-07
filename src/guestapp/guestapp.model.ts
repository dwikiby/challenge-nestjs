export interface Guest {
    //deklarasi data yang akan ditampung
    id: string,
    full_name: string,
    no_hp: number,
    alamat: string,
    tujuan_kunjungan: string,
    gender,
    status
}

export enum status {
    PEGAWAI = 'PEGAWAI',
    NONPEGAWAI = 'NON_PEGAWAI',
}

export enum genderStatus {
    PRIA = 'PRIA',
    WANITA = 'WANITA',
}