import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {DailyScheduleService} from '../../../shared/services/daily-schedule.service';

@Component({
  selector: 'app-list-inject',
  templateUrl: './list-inject.component.html',
  styleUrls: ['./list-inject.component.css']
})
export class ListInjectComponent implements OnInit {
  private listInjects;
  private totalElements;
  private totalPages: number;
  private pageNumber = 0;

  constructor(
    private dailyScheduleService: DailyScheduleService,
    public dialogRef: MatDialogRef<ListInjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router, ) { }

  ngOnInit() {
    this.listInjects = this.data.listInject.content;
    this.totalElements = this.data.listInject.totalElements;
    this.totalPages = this.data.listInject.totalPages;
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
  page() {
    this.dailyScheduleService.pageListInject(this.data.id, this.pageNumber).subscribe(data => {
      this.listInjects = data.content;
      this.pageNumber = data.pageable.pageNumber;
    });
  }

}
