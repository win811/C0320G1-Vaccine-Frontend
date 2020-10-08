import { TRANS_SUP_INVALID_INPUT_WARNING } from './../../../../shared/validations/trans-sup-validator';
import { Router } from '@angular/router';
import { SupplierTransactionService } from './../../../../shared/services/supplier-transaction.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-trans-sup-create',
  templateUrl: './trans-sup-create.component.html',
  styleUrls: ['./trans-sup-create.component.css']
})
export class TransSupCreateComponent implements OnInit {

  private newTrans: any;
  private createForm: FormGroup;
  private message: any;
  private errors = TRANS_SUP_INVALID_INPUT_WARNING;
  errorMessage = "";
  constructor(
    public supplierTransactionService: SupplierTransactionService,
    public router: Router
  ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      tradingCode: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern('[G][D][C][-][0-9]{4}')]),
      vaccineCode: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern('[M][V][X][-][0-9]{4}')]),
      billCode: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern('[M][H][D][-][0-9]{4}')]),
      vaccineType: new FormControl('',[Validators.required,Validators.pattern('[ 0-9A-Z]{1,}')]),
      amount: new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,}')]),
      supplier: new FormControl('',[Validators.required,Validators.pattern('[ 0-9A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}')]),
      tradingDate: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,}')])
    })
  }
  createNewTrans(): void {
    if (this.createForm.valid) {
      this.newTrans = {
        tradingCode: this.createForm.value.tradingCode,
        vaccineCode: this.createForm.value.vaccineCode,
        billCode: this.createForm.value.billCode,
        vaccineType: this.createForm.value.vaccineType,
        amount: this.createForm.value.amount,
        supplier: this.createForm.value.supplier,
        tradingDate: this.createForm.value.tradingDate,
        price: this.createForm.value.price,
        total: this.createForm.value.price * this.createForm.value.amount,
        delete: false
      };
      console.table(this.newTrans);
      this.supplierTransactionService.createNewTrans(this.newTrans).subscribe(
        data => {
          console.log(data);
          console.log('tạo mới thành công');
        }, error => { this.errorMessage = "Vui lòng điền đầy đủ thông tin hợp lệ" }, () => {
          if (this.errorMessage.length == 0) {
            this.message = "Tạo mới thành công";
          }
        }
      );
    } 
  }
  backTo() {
    this.router.navigateByUrl("/admin/supplier-transaction");
  }


  //to valid
  get tradingCode() {
    return this.createForm.get('tradingCode');
  }
  get vaccineCode() {
    return this.createForm.get('vaccineCode');
  }
  get vaccineType() {
    return this.createForm.get('vaccineType');
  }
  get amount() {
    return this.createForm.get('amount');
  }
  get billCode() {
    return this.createForm.get('billCode');
  }
  get supplier() {
    return this.createForm.get('supplier');
  }
  get tradingDate() {
    return this.createForm.get('tradingDate');
  }
  get price() {
    return this.createForm.get('price');
  }
}
