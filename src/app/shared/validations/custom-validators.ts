import { ValidatorFn, FormControl, ValidationErrors, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { differenceInYears } from "date-fns";
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


// Quân
export const CheckPhoneNumber: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    const phoneRegex = /^0[35789]\d{8}$/;
    const characterRegex = /^[^\d]+$/;
    const _phoneNumber: string = control.value;
    if (_phoneNumber === '') {
        return null;
    }
    if (characterRegex.test(_phoneNumber)) {
        return { alphabel: true };
    }
    if (!phoneRegex.test(_phoneNumber)) {
        return { format: true };
    }
    return null;
}


// Quân
export const checkAge: ValidatorFn = (date: AbstractControl): ValidationErrors | null => {
    const y = differenceInYears(new Date(), new Date(date.value));
    return y < 18 ? { age: true } : null;
}


// Quân
export const validateCode = (Service: any): AsyncValidatorFn => {
    return (control: AbstractControl): Observable<ValidationErrors> | null => {
        return Service.getListEmployee().pipe(
            map((code: any) => {
                return code.find((t) => t.code == control.value)
                    ? { invalidCode: true }
                    : null;
            }),
            catchError(() => of(null))
        );
    };
}

// Quân
export const EMPLOYEE_MESSAGES = {
    code: [
        { code: 'required', message: 'Vui lòng nhập mã nhân viên' },
        { code: 'pattern', message: 'Mã nhân viên không đúng định dạng' },
        { code: 'invalidCode', message: 'Mã nhân viên đã tồn tại' }
    ],
    fullName: [
        { code: 'required', message: 'Vui lòng nhập họ và tên' },
        { code: 'minlength', message: 'Họ và tên quá ngắn' }
    ],
    birthday: [
        { code: 'required', message: 'Vui lòng nhập ngày sinh' },
        { code: 'age', message: 'Chưa đủ 18 tuổi' }
    ],
    idCard: [
        { code: 'required', message: 'Vui lòng nhập CMND' },
        { code: 'pattern', message: 'CMND không đúng định dạng' }
    ],
    phoneNumber: [
        { code: 'required', message: 'Vui lòng nhập số điện thoại' },
        { code: 'format', message: 'Số điện thoại không hợp lệ' },
        { code: 'alphabel', message: 'Kí tự không hợp lệ' },
    ],
    position: [
        { code: 'required', message: 'Vui lòng chọn chức vụ' },

    ],
    address: [
        { code: 'required', message: 'Vui lòng nhập địa chỉ ' },
        { code: 'minlength', message: 'Địa chỉ quá ngắn' }
    ],
    role: [
        { code: 'required', message: 'Vui lòng chọn phân quyền' },

    ],
};