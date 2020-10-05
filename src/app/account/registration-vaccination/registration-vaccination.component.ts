import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vaccine} from '../../shared/models/Vaccine';
import {Patient} from '../../shared/models/patient';
import {InjectionHistory} from '../../shared/models/injectionHistory';
import {Router} from '@angular/router';
import {InjectionHistoryService} from '../../shared/services/injection-history.service';
import {NotifiByDucService} from '../../shared/services/notifi-by-duc.service';

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
  vacxin: Vaccine = {} as Vaccine;
  patient: Patient = {} as Patient;
  injection: InjectionHistory = {} as InjectionHistory;
  dto: DTO;
  message: string;
  maxDate= Date.now();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private injectionHistoryService: InjectionHistoryService,
    private noti: NotifiByDucService
  ) {

    const navigation = this.router.getCurrentNavigation();
    this.vacxin = navigation.extras.state as Vaccine;
    console.log(this.vacxin);
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      code: ['', Validators.required],
      parentName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      injectionDate: ['', Validators.required],
    });
    // tslint:disable-next-line:triple-equals
    if (this.vacxin != null) {
      this.secondFormGroup.patchValue(this.vacxin);
    }

  }

  registration() {
    this.injection.vaccine = this.vacxin;
    this.injection.patient = this.firstFormGroup.value;
    this.dto = this.secondFormGroup.value;
    this.injection.injectionDate = this.dto.injectionDate;
    this.injectionHistoryService.RegistrationHistory(this.injection).subscribe(data => {
      this.noti.showNotification('success', 'Thông Báo', data.message);
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
}
