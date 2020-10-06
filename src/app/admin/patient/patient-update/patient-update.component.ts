import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PatientService} from '../../../shared/services/patient.service';
import {Patient} from '../../../shared/models/patient';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})

// Thành Long
export class PatientUpdateComponent implements OnInit {

  patientUpdatePriceForm: FormGroup;


  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PatientUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.patientUpdatePriceForm = this.formBuilder.group({
      id: [""],
      code: [""],
      fullName: ["", [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      gender: ["", [Validators.required]],
      birthday: ["", [Validators.required]],
      parentName: ["", [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      address: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: [""]
    });
    this.patientUpdatePriceForm.patchValue(this.data.dataPatient);
  }

  onSubmit() {
    let patient = this.patientUpdatePriceForm.value as Patient;
    patient.status = true;
    this.patientService.updatePatient(patient).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
