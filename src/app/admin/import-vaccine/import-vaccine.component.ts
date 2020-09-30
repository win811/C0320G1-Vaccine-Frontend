import { VaccineService } from './../../shared/services/vaccine.service';
import { differenceInDays, differenceInHours, differenceInYears } from 'date-fns';
import {ToastrService} from '../../../../node_modules/ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { Vaccine } from '../../shared/models/Vaccine';

@Component({
  selector: 'app-import-vaccine',
  templateUrl: './import-vaccine.component.html',
  styleUrls: ['./import-vaccine.component.css']
})
export class ImportVaccineComponent implements OnInit {

  importForm : FormGroup;
  today = new Date();
  importErrors = IMPORT_ERRORS;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr : ToastrService,
    private vaccineService : VaccineService
  ) { }

  ngOnInit() {
    this.importForm = this.formBuilder.group({
      name : ["",[Validators.required]],
      content : ["",[Validators.required,invalidNumber]],
      category : ["",[Validators.required]],
      amount : ["",[Validators.required,invalidNumber]],
      receiveDate : ["",[Validators.required,higherThanToday]],
      expiryDate : ["",[Validators.required,lowerThanToday]],
      licenseCode : ["",[Validators.required,]],
      conditions : ["",[Validators.required,]],
      country : ["",[Validators.required,containNumber]],
      limitAge : ["",[Validators.required,ageInValid]],
      price : ["",[Validators.required,invalidNumber]],
    })
  }

  import() {
    if (this.importForm.valid) {
      let vaccine = this.importForm.value as Vaccine; 
      this.vaccineService.importVaccine(vaccine).subscribe(data => {
        console.log(data);
        this.toastr.success("Nhập kho thành công","Thông báo");
      })
    }
  }

  get name(){
    return this.importForm.get('name');
  }

  get content(){
    return this.importForm.get('content');
  }

  get category(){
    return this.importForm.get('category');
  }

  get amount(){
    return this.importForm.get('amount');
  }

  get receiveDate(){
    return this.importForm.get('receiveDate');
  }

  get expiryDate(){
    return this.importForm.get('expiryDate');
  }

  get licenseCode(){
    return this.importForm.get('licenseCode');
  }

  get conditions() {
    return this.importForm.get('conditions');
  }

  get country() {
    return this.importForm.get('country');
  }
  
  get limitAge() {
    return this.importForm.get('limitAge')
  }

  get price() {
    return this.importForm.get('price')
  }

}


const invalidNumber = (control : AbstractControl) : ValidationErrors => {
  if (isNaN(Number.parseInt(control.value))) return { isNaN : true };
  return null;
}

const containNumber = (control : AbstractControl) : ValidationErrors => {
  const characterRegex = /^[^\d]+$/;
  if (!characterRegex.test(control.value)) return { containNumber : true };
  return null;
}

const higherThanToday = (control : AbstractControl) : ValidationErrors => {
  let inputDate = new Date(control.value);
  let today = new Date();
  if ( differenceInHours(inputDate,today) > 0 ) return {higherThanToday : true};
  return null;
}

const lowerThanToday = (control : AbstractControl) : ValidationErrors => {
  let inputDate = new Date(control.value);
  let today = new Date();
  if ( differenceInHours(inputDate,today) <= 0 ) return {lowerThanToday : true};
  return null;
}

const ageInValid = (control : AbstractControl) : ValidationErrors => {
  if (isNaN(Number.parseInt(control.value))) return { ageInValid : true };
  return null;
}

const IMPORT_ERRORS = {

  nameErrors: [
    { name: 'required', message: 'Vui lòng nhập!' }
  ],
  contentErrors: [
    { name: 'required', message: 'Vui lòng nhập!' },
    { name: 'isNaN', message: 'Hàm lượng phải là số!' }
  ],
  categoryErrors: [
    { name: 'required', message: 'Vui lòng nhập!' }
  ],
  amountErrors: [
    { name: 'required', message: 'Vui lòng nhập!' },
    { name: 'isNaN', message: 'Số lượng phải là số!' }
  ],
  receiveDateErrors: [
    { name: 'required', message: 'Vui lòng nhập!' },
    { name: 'higherThanToday', message: 'Ngày nhập không được quá hôm nay!' }
  ],
  expiryDateErrors: [
    { name: 'required', message: 'Vui lòng nhập!' },
    { name: 'lowerThanToday', message: 'Hạn sử dụng phải lớn hơn hôm nay!' }
  ],
  licenseCodeErrors: [
    { name: 'required', message: 'Vui lòng nhập!' }
  ],
  conditionsErrors: [
    { name: 'required', message: 'Vui lòng nhập!' }
  ],
  countryErrors : [
    { name: 'required', message: 'Vui lòng nhập!' },
    { name: 'containNumber', message: 'Quốc gia không được chứa số!' },
  ],
  limitAgeErrors : [
    { name: 'required', message: 'Vui lòng nhập!' },
    { name: 'ageInValid', message: 'Dưới n tuổi : -n, trên n tuổi : n' }
  ],
  priceErrors : [
    { name : 'required', message : 'Vui lòng nhập!' },
    { name : 'isNaN', message : 'Đơn giá phải là số!'}
  ]
  
}