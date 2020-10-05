import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {InjectRequestService} from '../../../shared/services/inject-request.service';

@Component({
  selector: 'app-edit-patient-inject-request',
  templateUrl: './edit-patient-inject-request.component.html',
  styleUrls: ['./edit-patient-inject-request.component.css']
})
export class EditPatientInjectRequestComponent implements OnInit {
  private any;
  private id;
  private patient;
  private namePatient;
  private code;
  private phoneNumber;

  constructor(
    public dialogRef: MatDialogRef<EditPatientInjectRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router,
    private injectRequestService: InjectRequestService
  ) { }

  ngOnInit() {
    this.id = this.data.patient.id;
    this.namePatient = this.data.patient.patient.fullName;
    this.code = this.data.patient.patient.code;
    this.phoneNumber = this.data.patient.patient.phoneNumber;
  }

  edit(id) {
    this.injectRequestService.updatePatient(id, this.any).subscribe(data => {
        this.route.navigateByUrl('/admin/listPatientInjectRequest');
    });
  }



}
