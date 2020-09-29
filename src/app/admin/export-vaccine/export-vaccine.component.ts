import { FormBuilder, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Vaccine } from '../../shared/models/Vaccine';
import { VaccineService } from '../../shared/services/vaccine.service';

declare var $ : any;

@Component({
  selector: 'app-export-vaccine',
  templateUrl: './export-vaccine.component.html',
  styleUrls: ['./export-vaccine.component.css']
})
export class ExportVaccineComponent implements OnInit {

  @Input()
  vaccine : Vaccine;

  exportForm : FormGroup
  
  @Output()
  export = new EventEmitter();

  constructor(
    private vaccineServcice : VaccineService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.exportForm = this.formBuilder.group({
      amountExport : ["",[Validators.required,this.isNotANumber,this.isHigherThanCurrentAmount.bind(this)]]
    })
  }

  doConfirm() {
    this.export.emit(this.amountExport.value);
  }

  isNotANumber(control : AbstractControl) : ValidationErrors {
    if (isNaN(Number.parseInt(control.value))) return { isNaN : true };
    return null;
  }

  isHigherThanCurrentAmount(control : AbstractControl) : ValidationErrors {
    if (isNaN(Number.parseInt(control.value)) === false && Number.parseInt(control.value) > this.vaccine.amount ) 
    return { isHigher : true };
    return null;
  }

  get amountExport() {
    return this.exportForm.get('amountExport');
  }

}
