import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vaccine} from '../../shared/models/Vaccine';
import {Patient} from '../../shared/models/patient';
import {InjectionHistory} from '../../shared/models/injectionHistory';
import {Router} from '@angular/router';
import {InjectionHistoryService} from '../../shared/services/injection-history.service';
import {NotifiByDucService} from '../../shared/services/notifi-by-duc.service';
import {VaccineService} from '../../shared/services/vaccine.service';

export interface DTO {
  name: string;
  category: string;
  country: string;
  injectionDate: Date;
}

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-registration-vaccination',
  templateUrl: './registration-vaccination.component.html',
  styleUrls: ['./registration-vaccination.component.css']
})
export class RegistrationVaccinationComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  vacxin2: Vaccine = {} as Vaccine;
  vacxin: Vaccine = {
    id: 0,
    name: '',
    category: '',
    country: '',
  };
  patient: Patient = {} as Patient;
  injection: InjectionHistory = {} as InjectionHistory;
  dto: DTO;
  message: string;
  maxDate = Date.now();
  vaccineList: Vaccine[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  searchVaccine: SearchVaccine;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private injectionHistoryService: InjectionHistoryService,
    private vaccineService: VaccineService,
    private noti: NotifiByDucService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.vacxin2 = navigation.extras.state as Vaccine;
    console.log(this.vacxin2);
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      fullName: ['', [Validators.required,Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$/)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)]],
      birthday: ['', Validators.required],
      code: ['', Validators.required],
      parentName: ['', [Validators.required,Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$/)]],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required,Validators.pattern(/^0[0-9]{9}$/)]]
    });
    this.secondFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      injectionDate: ['', Validators.required],
    });
    // tslint:disable-next-line:triple-equals
    if (this.vacxin2 != null) {
      this.vacxin = this.vacxin2;
      this.secondFormGroup.patchValue(this.vacxin2);
    }
    this.searchVaccine = {
      name: '',
      category: '',
      country: '',
      inventoryStatus: ''
    };
    console.warn('getpage');
    this.getPage(1);
  }

  getPage(page: number) {
    this.vaccineService.getAllVacxin().subscribe(res => {
      this.vaccineList = res.body;
      console.log('list vacxin');
      console.log(this.vaccineList);
    }, error => {
      console.log(error);
    });
  }

  registration() {
    this.injection.vaccine = this.vacxin;
    this.injection.patient = this.firstFormGroup.value;
    this.dto = this.secondFormGroup.value;
    this.injection.injectionDate = this.dto.injectionDate;
    console.log(this.injection);
    this.injectionHistoryService.RegistrationHistory(this.injection).subscribe(data => {
      this.noti.showNotification('success', 'Thông Báo', data.message);
      this.router.navigate(['']);
    }, error1 => {
      this.noti.showNotification('danger', 'Thông Báo', error1.error.message);
    });
  }

  sendVerifyToken() {
    this.injection.patient = this.firstFormGroup.value;
    const email = this.injection.patient.email;
    this.injectionHistoryService.sendVerifyToken(email).subscribe(data => {
      this.noti.showNotification('success', 'Thông Báo', data.message);
    }, error => {
      this.noti.showNotification('danger', 'Thông Báo', error.error.message);
    });
  }

  setInjection() {
    this.injection.vaccine = this.vacxin;
    this.injection.patient = this.firstFormGroup.value;
    this.dto = this.secondFormGroup.value;
    this.injection.injectionDate = this.dto.injectionDate;
  }
}

export class SearchVaccine {
  name: string;
  category: string;
  country: string;
  inventoryStatus: string;

  constructor(searchVaccine: SearchVaccine) {
    this.name = searchVaccine.name;
    this.category = searchVaccine.category;
    this.country = searchVaccine.country;
    this.inventoryStatus = searchVaccine.inventoryStatus;
  }
}
