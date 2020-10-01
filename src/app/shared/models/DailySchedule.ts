// Thành Long
export interface Vaccine {
  id: number;
  startTime: Date;
  endTime: Date;
  address: string;
  note: string;
  vaccinationDate: Date;
  vaccine: Vaccine;
}
