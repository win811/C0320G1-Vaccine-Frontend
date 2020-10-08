import { SupplierTransaction } from './../../../../shared/models/SupplierTransaction';
import { SupplierTransactionService } from './../../../../shared/services/supplier-transaction.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TRANS_SUP_INVALID_INPUT_WARNING } from './../../../../shared/validations/trans-sup-validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trans-sup-edit',
  templateUrl: './trans-sup-edit.component.html',
  styleUrls: ['./trans-sup-edit.component.css']
})
export class TransSupEditComponent implements OnInit {

  object : SupplierTransaction;
  private newTrans: any;
  private createForm: FormGroup;
  private message: any;
  private errors = TRANS_SUP_INVALID_INPUT_WARNING;
  errorMessage = "";
  id: number;

  constructor(
    private fb: FormBuilder,
    public supplierTransactionService: SupplierTransactionService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

 
  ngOnInit() {
    this.createForm = this.fb.group({
      tradingCode: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('[G][D][C][-][0-9]{4}')]],
      vaccineCode: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('[M][V][X][-][0-9]{4}')]],
      billCode: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('[M][H][D][-][0-9]{4}')]],
      vaccineType: ['',[Validators.required,Validators.pattern('[ 0-9A-Z]{1,}')]],
      amount: ['',[Validators.required,Validators.pattern('[0-9]{1,}')]],
      supplier: ['',[Validators.required,Validators.pattern('[ 0-9A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}')]],
      tradingDate: ['',[Validators.required]],
      price: ['',[Validators.required,Validators.pattern('[0-9]{1,}')]]
    });

    this.activeRoute.params.subscribe(data => {
      this.id = data.id;
      this.supplierTransactionService.getTransById(this.id).subscribe(data => {
        this.object = data;
        this.createForm.patchValue(JSON.parse(data) );

      })
    });
  }
  updateNewTrans(): void {
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
        isDelete: false
      };

      this.supplierTransactionService.updateTrans(this.id, this.newTrans).subscribe(
        data => {
          console.table(this.newTrans);
          console.log(data);
          console.log('update thành công');
        }, error => { this.errorMessage = "Vui lòng điền đầy đủ thông tin hợp lệ" }, () => {
          if (this.errorMessage.length == 0) {
            this.message = "Cập nhật thành công";
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
