import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VaccineService} from '../../shared/services/vaccine.service';
import {Observable} from 'rxjs';
import {Vaccine} from '../../shared/models/Vaccine';
import {map, tap} from 'rxjs/operators';
import {VaccineSearchDTO} from '../../shared/models/dto/vaccineSearchDTO';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {VaccineUpdatePriceComponent} from '../vaccine-update-price/vaccine-update-price.component';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent implements OnInit {
  private formSearchVaccine: FormGroup;
  id: number;
  vaccines: Observable<Vaccine[]>;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  isEmpty = false;
  hideableDiv = false;
  private message: string;
  private priceSearch: string[] = ['0', '100000', '500000', '1000000', '5000000', 'max'];
  private searchFields: VaccineSearchDTO = {} as VaccineSearchDTO;

  constructor(
    public formBuilder: FormBuilder,
    private vaccineService: VaccineService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.formSearchVaccine = this.formBuilder.group({
      code: [''],
      category: ['', [Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ0-9\\ ]*$')]],
      country: ['', [Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      price: ['']
    });
    this.getPage(1);
  }

  // Thành Long
  getPage(pageNumber) {
    this.vaccines = this.vaccineService.getVaccine(this.searchFields, pageNumber).pipe(
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
    this.searchFields = this.formSearchVaccine.value as VaccineSearchDTO;
    switch (this.formSearchVaccine.get('price').value) {
      case '0':
        this.searchFields.minPrice = this.priceSearch[0];
        this.searchFields.maxPrice = this.priceSearch[1];
        break;
      case '1':
        this.searchFields.minPrice = this.priceSearch[1];
        this.searchFields.maxPrice = this.priceSearch[2];
        break;
      case '2':
        this.searchFields.minPrice = this.priceSearch[2];
        this.searchFields.maxPrice = this.priceSearch[3];
        break;
      case '3':
        this.searchFields.minPrice = this.priceSearch[3];
        this.searchFields.maxPrice = this.priceSearch[4];
        break;
      default:
        this.searchFields.minPrice = '';
        this.searchFields.maxPrice = '';
    }
    console.log(this.searchFields);
    this.getPage(1);
  }

  // Thành Long
  getAge(age: number): string{
    if (age>0){
      return "Trên "+ age + " tuổi"
    }else {
      return "Dưới " + Math.abs(age) + " tuổi"
    }
  }

  // Thành Long
  openEdit(vaccine) {
    const dialogRef = this.dialog.open(VaccineUpdatePriceComponent, {
      width: "500px",
      height: "300px",
      autoFocus: true,
      data: {
        dataVaccine: vaccine,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.getPage(this.currentPage)
      }
    });
  }
}
