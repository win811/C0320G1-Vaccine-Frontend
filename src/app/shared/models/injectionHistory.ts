import {Vaccine} from './Vaccine';
import {Account} from './Account';
import {Patient} from './patient';

export interface InjectionHistory {
  id: number;
  isInjected: boolean;
  injectionDate: Date;
  reponseContent: string;
  registerType: string;
  account: Account;
  vaccine: Vaccine;
  patient: Patient
}
