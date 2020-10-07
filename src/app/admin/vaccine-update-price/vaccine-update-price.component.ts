import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeCreateComponent} from '../employee/employee-create/employee-create.component';
import {VaccineService} from '../../shared/services/vaccine.service';
import {Vaccine} from '../../shared/models/Vaccine';

// Thành Long
@Component({
  selector: 'app-vaccine-update-price',
  templateUrl: './vaccine-update-price.component.html',
  styleUrls: ['./vaccine-update-price.component.css']
})
export class VaccineUpdatePriceComponent implements OnInit {
  vaccineUpdatePriceForm: FormGroup;


  constructor(
    private vaccineService: VaccineService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.vaccineUpdatePriceForm = this.formBuilder.group({
      id: [''],
      name: [''],
      code: [''],
      category: [''],
      receiveDate: [''],
      licenseCode: [''],
      country: [''],
      content: [''],
      amount: [''],
      expiryDate: [''],
      conditions: [''],
      limitAge: [''],
      inventoryStatus: [''],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.vaccineUpdatePriceForm.patchValue(this.data.dataVaccine);
  }

  onSubmit() {
    let vaccine = this.vaccineUpdatePriceForm.value as Vaccine;
    this.vaccineService.updateVaccinePrice(vaccine).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
