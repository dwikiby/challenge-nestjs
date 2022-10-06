export interface Test {
    //deklarasi data yang akan ditampung
    id: string,
    full_name: string,
    motto: string,
    cv: string,
    gender
}

export enum genderStatus {
    PRIA = 'PRIA',
    WANITA = 'WANITA',
}