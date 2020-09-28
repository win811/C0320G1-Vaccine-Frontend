import { element } from 'protractor';
import { Vaccine } from './../../shared/models/Vaccine';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VaccineService } from 'src/app/shared/services/vaccine.service';

declare var $ : any;

@Component({
  selector: 'app-vaccine-storage',
  templateUrl: './vaccine-storage.component.html',
  styleUrls: ['./vaccine-storage.component.css']
})
export class VaccineStorageComponent implements OnInit {

  @ViewChild("focusOn",{ static: true })
  private elementRef : ElementRef
  vaccineList : Vaccine[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  searchVaccine : SearchVaccine = {
    name : "",
    category : "",
    country : "",
    inventoryStatus : ""
  }
  currentSearchVaccine : SearchVaccine = {
    name : "",
    category : "",
    country : "",
    inventoryStatus : ""
  }


  constructor(private vaccineService : VaccineService) { }

  getPage(page : number) {

  }

  ngOnInit() {
  }

}

class SearchVaccine {
  name : string;
  category : string;
  country : string;
  inventoryStatus : string;
}
