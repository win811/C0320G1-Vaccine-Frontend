import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Patient} from '../../../shared/models/patient';
import {PatientSearchDTO} from '../../../shared/models/dto/patientSearchDTO';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PatientService} from '../../../shared/services/patient.service';
import {map, tap} from 'rxjs/operators';
import {PatientUpdateComponent} from '../patient-update/patient-update.component';
import {PatientCreateComponent} from '../patient-create/patient-create.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private formSearchPatient: FormGroup;
  patients: Observable<Patient[]>;
  private patientList: Patient[] = [];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  isEmpty = false;
  hideableDiv = false;
  private message: string;
  private searchFields: PatientSearchDTO = {} as PatientSearchDTO;

  constructor(
    public formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.formSearchPatient = this.formBuilder.group({
      code: [''],
      fullName: ['', [Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
    });
    this.getPage(1);
  }

  // Thành Long
  getPage(pageNumber) {
    this.patients = this.patientService.getPatient(this.searchFields, pageNumber).pipe(
      tap(res => {
        console.log(res);
        if (res === null) {
          this.message = 'Không tìm thấy thông tin khách hàng khớp với tìm kiếm !';
          this.hideableDiv = false;
        } else {
          this.message = '';
        }
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.isEmpty = false;
        if (res.content.length ===  0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log('vào được err của tap');
      }),
      map(res => res.content)
    );
  }

  // Thành Long
  search() {
    this.searchFields = this.formSearchPatient.value as PatientSearchDTO;
    console.log(this.searchFields);
    this.getPage(1);
  }

  // Thành Long
  openEdit(patient) {
    const dialogRef = this.dialog.open(PatientUpdateComponent, {
      minWidth: 500,
      height: "650px",
      autoFocus: true,
      data: {
        dataPatient: patient,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.getPage(this.currentPage)
      }
    });
  }

  // Thành Long
  openCreate(): void {
    const dialogRef = this.dialog.open(PatientCreateComponent, {
      width: "810px",
      height: "700px",
      autoFocus: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.getPage(this.currentPage)
      }
    });
  }

  // Thành Long
  delete(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.patientList = this.patientList.filter(
        (t) => t.id != id
      );
      this.ngOnInit();
      alert('Xoá thành công !');

    })
  }



}
