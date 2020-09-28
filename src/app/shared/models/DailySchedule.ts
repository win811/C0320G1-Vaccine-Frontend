import {Vaccine} from './Vaccine';

export interface DailySchedule {
  id: number;
  startTime: string;
  endTime: string;
  address: string;
  note: string;
  vaccinationDate: Date;
  vaccine: Vaccine;
}

