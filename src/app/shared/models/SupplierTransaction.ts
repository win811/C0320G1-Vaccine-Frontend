export interface SupplierTransaction {
    id: number;
    tradingCode: string;
    vaccineCode: string;
    vaccineType: string;
    amount: number;
    billCode: string;
    supplier: string;
    tradingDate: Date;
    price: number;
    total: number;
    isDelete: boolean;
  }
  