import {Patient} from './patient';
import {Vaccine} from './Vaccine';

export interface InjectionHistory {
  id: number;
  isInjected: string;
  responseContent: string;
  registerType: string;
  injectionDate: Date;
  account?: Account;
  patient?: Patient;
  vaccine?: Vaccine;
}
