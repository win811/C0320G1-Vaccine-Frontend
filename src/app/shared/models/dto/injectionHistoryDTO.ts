import { Patient } from './../patient';
export interface InjectionHistoryDTO {
    injectionDate: Date;
    patient: Patient;
    isInjected: string;

}