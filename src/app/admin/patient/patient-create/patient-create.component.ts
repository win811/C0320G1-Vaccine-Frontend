import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../../shared/services/patient.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Patient} from '../../../shared/models/patient';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patientCreateForm: FormGroup;

  constructor(
    private patientService : PatientService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PatientCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  // Thành Long
  ngOnInit() {
    this.patientCreateForm = this.formBuilder.group({
      code: ["", [Validators.required, Validators.pattern('^BN-[0-9]{3}$')]],
      fullName: ["", [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      gender: ["", [Validators.required]],
      birthday: ["", [Validators.required]],
      parentName: ["", [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      address: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  // Thành Long
  onSubmit() {
    let patient = this.patientCreateForm.value as Patient;
    patient.status = true;
    this.patientService.createPatient(patient).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
