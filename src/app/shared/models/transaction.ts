export interface Transaction {
    id: number;
    vaccineId: number;
    amount: number;
    accountId: number;
    transactionDate: Date;
    totalPrice: number;
}
