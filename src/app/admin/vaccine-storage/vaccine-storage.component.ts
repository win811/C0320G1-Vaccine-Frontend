import {ToastrService} from '../../../../node_modules/ngx-toastr';
import { Vaccine } from './../../shared/models/Vaccine';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VaccineService } from '../../shared/services/vaccine.service';

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
  searchVaccine : SearchVaccine;
  currentSearchVaccine : SearchVaccine;
  exportVaccine : Vaccine;
  exportAmount : number;


  constructor(
    private vaccineService : VaccineService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.searchVaccine = {
      name : "",
      category : "",
      country : "",
      inventoryStatus : ""
    };
    this.currentSearchVaccine = {
      name : "",
      category : "",
      country : "",
      inventoryStatus : ""
    };
    this.elementRef.nativeElement.focus();
    this.getPage(1);
  }

  chooseExportVaccine(vaccine : Vaccine) {
    this.exportVaccine = vaccine;
  }

  exportConfirm(exportAmount : number) {
    this.exportAmount = exportAmount;
    $('#confirmExport').modal('show');
  }

  doExport() {
    
    this.vaccineService.exportVaccine(this.exportVaccine.id,this.exportAmount).subscribe(data => {
      this.toastr.success("Xuất kho thành công","Thông báo");
      this.getPage(this.currentPage);
    },error => {
      this.toastr.error("Xuất kho thất bại","Thông báo");
    })
  }

  getPage(page : number) {
    this.vaccineService.getVaccineStorage(this.searchVaccine,page).subscribe(res => {
      this.totalElements = res.totalElements;
      this.pageSize = res.size;
      this.currentPage = page;
      this.vaccineList = res.content;
    },error => {
      console.log(error);
    })
  }

  search() {
    this.searchVaccine = new SearchVaccine(this.currentSearchVaccine);
    this.getPage(1);
  }

}

export class SearchVaccine {
  name : string;
  category : string;
  country : string;
  inventoryStatus : string;
  
  constructor(searchVaccine : SearchVaccine) {
    this.name = searchVaccine.name;
    this.category = searchVaccine.category;
    this.country = searchVaccine.country;
    this.inventoryStatus = searchVaccine.inventoryStatus
  }
}
