import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Vaccine} from '../../shared/models/Vaccine';
import {VaccineService} from '../../shared/services/vaccine.service';

@Component({
  selector: 'app-table-vacxin',
  templateUrl: './table-vacxin.component.html',
  styleUrls: ['./table-vacxin.component.css']
})
export class TableVacxinComponent implements OnInit {
  searchForm: FormGroup;
  private vaccines: Vaccine[] = [];
  private totalElements: number;
  private pageSize: number;
  private currentPage: number;

  // private list: Vaccine[] = [];
  constructor(private vaccineService: VaccineService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      name: [""],
      category: [""],
      country: [""],
      conditions: [""]
    })
  }


}
