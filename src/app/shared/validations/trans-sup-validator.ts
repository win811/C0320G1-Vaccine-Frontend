export const TRANS_SUP_INVALID_INPUT_WARNING = {
    tradingCodeErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'maxlength', message: 'Vui lòng nhập không quá 8 kí tự' },
        { code: 'pattern', message: 'Vui lòng nhập đúng định dạng "GDC-xxxx" trong đó "xxxx" là 4 số' }
    ],
    vaccineCodeErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'maxlength', message: 'Vui lòng nhập không quá 8 kí tự' },
        { code: 'pattern', message: 'Vui lòng nhập đúng định dạng "MVX-xxxx" trong đó "xxxx" là 4 số' }
    ],
    vaccineTypeErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'pattern', message: 'Loại vắc xin phải được viết bằng chữ số và chữ cái viết hoa' }
    ],
    amountErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'pattern', message: 'Vui lòng nhập giá bằng chữ số' }
    ],
    billCodeErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'maxlength', message: 'Vui lòng nhập không quá 8 kí tự' },
        { code: 'pattern', message: 'Vui lòng nhập đúng định dạng "MHD-xxxx" trong đó "xxxx" là 4 số' }
    ],
    supplierErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'pattern', message: 'Chỉ bao gồm chữ cái và chữ số' }
    ],
    tradingDateErrors: [
        { code: 'required', message: 'Không được để trống' },
    ],
    priceErrors: [
        { code: 'required', message: 'Không được để trống' },
        { code: 'pattern', message: 'Chỉ bao gồm chữ số' }
    ],
    
};
