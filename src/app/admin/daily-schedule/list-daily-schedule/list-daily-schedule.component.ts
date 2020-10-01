import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DailyScheduleService} from '../../../shared/services/daily-schedule.service';
import {ListInjectComponent} from '../list-inject/list-inject.component';

@Component({
  selector: 'app-list-daily-schedule',
  templateUrl: './list-daily-schedule.component.html',
  styleUrls: ['./list-daily-schedule.component.css']
})
export class ListDailyScheduleComponent implements OnInit {
  private dailySchedules;
  private nameVaccine = '';
  private status = '';
  private startDay = '2020-01-01';
  private endDay = '2020-12-31';
  private pageNumber = 0;
  private  totalPages ;
  private formSearch: FormGroup;

  constructor(private dailyScheduleService: DailyScheduleService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      nameVaccine: ['', [Validators.required]],
      status: ['', [Validators.required]],
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
    });
    this.dailyScheduleService.page(this.nameVaccine, this.status, this.startDay, this.endDay, this.pageNumber).subscribe(data => {
      this.dailySchedules = data.content;
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
    this.dailyScheduleService.page(this.nameVaccine, this.status, this.startDay, this.endDay, this.pageNumber).subscribe(data => {
      this.dailySchedules = data.content;
      this.pageNumber = data.pageable.pageNumber;
    });
  }

  search() {
    this.pageNumber = 0;
    this.nameVaccine = this.formSearch.controls.nameVaccine.value;
    this.status = this.formSearch.controls.status.value;
    this.startDay = this.formSearch.controls.startDay.value;
    this.endDay = this.formSearch.controls.endDay.value;
    this.dailyScheduleService.page(this.nameVaccine, this.status, this.startDay, this.endDay, this.pageNumber)
      .subscribe(data => {
        this.dailySchedules = data.content;
        this.totalPages = data.totalPages;
      });
  }

  list(id) {
    this.pageNumber = 0;
    this.dailyScheduleService.pageListInject(id, this.pageNumber).subscribe( data => {
      const dialogRef = this.dialog.open(ListInjectComponent, {
        width: '700px',
        height: '505px',
        data: {listInject: data, id},
        disableClose: false,
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
