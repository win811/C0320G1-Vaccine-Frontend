import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DailySchedule} from "../../shared/models/DailySchedule";
import {DailyScheduleService} from "../../shared/services/daily-schedule.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Patient} from "../../shared/models/Patient";
import {PatientService} from "../../shared/services/patient.service";
import {Router} from "@angular/router";
import {ConfirmRegisterComponent} from "./confirm-register/confirm-register.component";

@Component({
  selector: 'app-register-inject-schedule',
  templateUrl: './register-inject-schedule.component.html',
  styleUrls: ['./register-inject-schedule.component.css']
})
export class RegisterInjectScheduleComponent implements OnInit {
  public infoVaccine: DailySchedule;
  public registerInjectForm: FormGroup;
  patient: Patient;
  private vaccineId;
  private accountId =1 ;
  private injectionDate ;


  constructor(
    // public dialogRef: MatDialogRef<RegisterInjectScheduleComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // public dailyScheduleService: DailyScheduleService,
    // private formBuilder: FormBuilder
    private matDialog: MatDialog,
    private patientService: PatientService,
    private dailyScheduleService: DailyScheduleService,
    private formBuilder: FormBuilder,
    private route : Router,
    private dialogRef: MatDialogRef<RegisterInjectScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    // this.getDaily();
    this.registerInjectForm = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.pattern('^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\ ]{3,}$')]],
      gender:["",Validators.required],
      birthday: ["", [Validators.required]],
      parentName : ["", [Validators.required, Validators.pattern('^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\ ]{3,}$')]],
      address: ["", Validators.required],
      phoneNumber: ["", [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      name: [""],
      category: [""],
      country: [""],
      price: [""],
      vaccinationDate:[""]
    });
    // console.log(this.registerInjectForm.value );
   // this.registerInjectForm.patchValue(this.data.dataDl);
   this.vaccineId = this.data.dataDl.vaccine.id;
   this.injectionDate = this.data.dataDl.vaccinationDate;
  }

  getDaily() {
    this.dailyScheduleService.getInfoDailyVaccine(this.data.id).subscribe((res) => {
      this.infoVaccine = res;
    });
  }


  import() {
    this.patient=this.registerInjectForm.value;
    this.patientService.getaddPatient(this.patient).subscribe(data => {
      this.patientService.registerPatient(data.id,this.vaccineId,this.accountId,this.injectionDate).subscribe(data=>{
      });
      this.matDialog.closeAll();
      const dialogRef = this.matDialog.open(ConfirmRegisterComponent, {
        minWidth: "500px",
        minHeight: "150px",
        autoFocus: true,
        data: {
        }
      });
      dialogRef.afterClosed().subscribe((result) => {});
  });


  }
}
