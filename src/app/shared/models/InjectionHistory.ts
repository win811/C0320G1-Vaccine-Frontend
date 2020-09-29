import {Vaccine} from './Vaccine';
import {Account} from './Account';

export interface InjectionHistory {
  id: number;
  isInjected: boolean;
  injectionDate: Date;
  reponseContent: string;
  registerType: string;
  account: Account;
  vaccine: Vaccine
}
