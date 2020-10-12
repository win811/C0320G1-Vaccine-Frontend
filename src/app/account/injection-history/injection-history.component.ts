import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {InjectionHistory} from '../../shared/models/InjectionHistory';
import {InjectionHistoryService} from '../../shared/services/injection-history.service';
import {tap,map} from 'rxjs/operators';

@Component({
  selector: 'app-injection-history',
  templateUrl: './injection-history.component.html',
  styleUrls: ['./injection-history.component.css']
})
export class InjectionHistoryComponent implements OnInit {
  myInjectionHistory: Observable<InjectionHistory[]>;
  accountId = 2; //test id;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  isEmpty: boolean = false;

  constructor(
    private injectionHistoryService: InjectionHistoryService,
  ) { }

  ngOnInit() {
    this.getPage(1);
  }

  // Thành Long
  getPage(pageNumber: number) {
    this.myInjectionHistory = this.injectionHistoryService.getInjectionHistory(this.accountId,pageNumber).pipe(
      tap(res => {
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.isEmpty = false;
        if (res.content.length == 0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log("vào được err của tap");
      }),
      map(res => res), map(res => res.content)
    );
  }

}
