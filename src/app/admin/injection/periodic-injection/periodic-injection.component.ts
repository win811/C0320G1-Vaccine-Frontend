import { InjectionHistoryDTO } from './../../../shared/models/dto/injectionHistoryDTO';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { tap, map } from 'rxjs/operators';
import { InjectionHistoryService } from './../../../shared/services/injection-history.service';


@Component({
  selector: 'app-periodic-injection',
  templateUrl: './periodic-injection.component.html',
  styleUrls: ['./periodic-injection.component.css']
})
export class PeriodicInjectionComponent implements OnInit {
  searchForm: FormGroup;
  private injectionList: InjectionHistoryDTO[] = [];
  private totalElements: number;
  private pageSize: number;
  private currentPage: number;
  private list: InjectionHistoryDTO[] = [];


  constructor(private injectionService: InjectionHistoryService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      fullName: [''],
      injected: ['']
    });
    this.getPage(1);

  }

  // Quân
  getPage(page: number) {

    this.injectionService.getSearchInjection(page, this.searchForm).pipe(
      tap(res => {
        if (res != null) {
          this.totalElements = res.totalElements;
          this.pageSize = res.size;
          this.currentPage = page;
        } else {
          this.totalElements = 1;
          this.pageSize = 1;
          this.currentPage = 1;
        }


      }),
      map(res => {
        if (res != null) {
          return res.content;
        } else {
          return this.list;
        }
      })
    ).subscribe((data) => {
      this.injectionList = data;
    });
  }

  // Quân
  search() {
    this.getPage(1);
  }
}
