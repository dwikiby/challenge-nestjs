import { genderStatus, Test } from '../challenge.model';

export class GetTestStatusFilterDto {
    gender?: genderStatus; //tanda '?' adalah nulllabel.
    search?: string;
}
