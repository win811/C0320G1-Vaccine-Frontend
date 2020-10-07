import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DailySchedule} from "../../shared/models/DailySchedule";
import {DailyScheduleService} from "../../shared/services/daily-schedule.service";
import {filter, map, tap} from "rxjs/operators";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RegisterInjectScheduleComponent} from "../../account/register-inject-schedule/register-inject-schedule.component";
import {filterStackTrace} from "protractor/built/util";

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {

  dailySchedule: Observable<DailySchedule[]>;
  stt: number[] = [];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  isEmpty = false;
  hideableDiv = false;
  private message: string;

  constructor(
    public dailyScheduleService: DailyScheduleService,
    public matDialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getDailySchedule(1);
  }


  getDailySchedule(pageNumber) {
    this.dailySchedule = this.dailyScheduleService.getDailySchedule(pageNumber).pipe(
      tap(res => {
        if (res === null) {
          this.message = 'Không tìm thấy thông tin khách hàng khớp với tìm kiếm !';
          this.hideableDiv = false;
        } else {
          this.message = '';
        }
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.stt = [];
        const firstIndex = this.pageSize * (this.currentPage - 1) + 1;
        const lastIndeex = this.pageSize * this.currentPage;
        for (let i = firstIndex; i <= lastIndeex; i++) {
          this.stt.push(i);
        }

        this.isEmpty = false;
        if (res.content.length == 0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log('vào được err của tap');
      }),
      map(res => res.content)
    );
  }

  // getDailySchedule(pageNumber) {
  //   this.dailySchedule = this.dailyScheduleService.getDailySchedule( pageNumber).pipe(
  //     tap(res => {
  //       console.log(res);
  //       this.totalElements = res.totalElements;
  //       this.pageSize = res.size;
  //       this.currentPage = pageNumber;
  //       this.stt = [];
  //       const firstIndex = this.pageSize * (this.currentPage - 1) + 1;
  //       const lastIndeex = this.pageSize * this.currentPage;
  //       for (let i = firstIndex; i <= lastIndeex; i++) {
  //         this.stt.push(i);
  //       }
  //       this.isEmpty = false;
  //       if (res.content.length ==  0) {
  //         this.isEmpty = true;
  //       }
  //     }, error => {
  //       console.log(error);
  //       console.log('vào được err của tap');
  //     }),
  //     map(res => res.content)
  //   );
  // }

  getAge(limitAge: number) {
    if (limitAge > 0) {
      return "Trên " + limitAge + " tuổi"
    } else if (limitAge == 0) {
      return "Trẻ em "
    } else {
      return "Dưới " + limitAge + " tuổi"
    }

  }


  // openDialog(id: number) {
  //   console.log(id);
  //   const dialogConfig = new MatDialogConfig();
  //   // The user can't close the dialog by clicking outside its body
  //   dialogConfig.disableClose = true;
  //   dialogConfig.id = "modal-component";
  //   const dialogRef = this.matDialog.open(RegisterInjectScheduleComponent, {
  //     disableClose: true,
  //     id: "modal-component",
  //     minHeight: '500px',
  //     minWidth: '1000px',
  //     data: {
  //       id: id
  //     }
  //   });
  // }

  openCreate(dl): void {
    const dialogRef = this.matDialog.open(RegisterInjectScheduleComponent, {
      minWidth: "1000px",
      minHeight: "500px",
      autoFocus: true,
      data: {
        dataDl: dl,
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.getDailySchedule(this.currentPage)
      }

      this.ngOnInit();
    });
  }

}
