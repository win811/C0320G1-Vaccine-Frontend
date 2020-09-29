export interface Patient {
    id: number;
    code: string;
    fullName: string;
    gender: string;
    birthday: Date;
    parentName: string;
    address: string;
    phoneNumber: string;
    email: string;
    status: boolean;
}