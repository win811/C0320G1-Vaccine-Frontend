import { Account } from './Account';
import { Vaccine } from './Vaccine';

export interface Transaction {
    id: number;
    vaccine: Vaccine;
    amount: number;
    account: Account;
    transactionDate: Date;
    totalPrice: number;
}
