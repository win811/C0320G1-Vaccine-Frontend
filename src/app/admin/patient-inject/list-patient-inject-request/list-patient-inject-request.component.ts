import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {InjectRequestService} from '../../../shared/services/inject-request.service';
import {EditPatientInjectRequestComponent} from '../edit-patient-inject-request/edit-patient-inject-request.component';

@Component({
  selector: 'app-list-patient-inject-request',
  templateUrl: './list-patient-inject-request.component.html',
  styleUrls: ['./list-patient-inject-request.component.css']
})
export class ListPatientInjectRequestComponent implements OnInit {
  private patients;
  private namePatient = '';
  private isInject = 'chưa tiêm';
  private type = 'yêu cầu';
  private pageNumber = 0;
  private  totalPages ;
  private formSearch: FormGroup;

  constructor(private injectRequestService: InjectRequestService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog, ) { }

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      namePatient: ['', [Validators.required]],
      isInject: ['chưa tiêm', [Validators.required]],
    });
    this.injectRequestService.page(this.namePatient, this.isInject, this.type, this.pageNumber).subscribe(data => {
      this.patients = data.content;
      this.pageNumber = data.pageable.pageNumber;
      this.totalPages = data.totalPages;
    });
  }

  next() {
    this.pageNumber = this.pageNumber + 1;
    if (this.pageNumber >= this.totalPages) {
      console.log('Khong hop le');
      this.pageNumber = this.pageNumber - 1;
    } else {
      this.page();
    }
  }

  previous() {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber < 0) {
      console.log('Khong hop le');
      this.pageNumber = this.pageNumber + 1;
    } else {
      this.page();
    }
  }

  first() {
    this.pageNumber = 0;
    this.page();
  }

  last() {
    this.pageNumber = this.totalPages - 1;
    this.page();
  }

  page() {
    this.injectRequestService.page(this.namePatient, this.isInject, this.type, this.pageNumber).subscribe(data => {
      this.patients = data.content;
      this.pageNumber = data.pageable.pageNumber;
    });
  }

  search() {
    this.pageNumber = 0;
    this.namePatient = this.formSearch.controls.namePatient.value;
    this.isInject = this.formSearch.controls.isInject.value;
    this.injectRequestService.page(this.namePatient, this.isInject, this.type, this.pageNumber)
      .subscribe(data => {
        this.patients = data.content;
        this.totalPages = data.totalPages;
      });
  }
  edit(id) {
    this.pageNumber = 0;
    this.injectRequestService.getPatient(id).subscribe( data => {
      const dialogRef = this.dialog.open(EditPatientInjectRequestComponent, {
        width: '500px',
        height: '270px',
        data: {patient: data, id},
        disableClose: false,
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

}
