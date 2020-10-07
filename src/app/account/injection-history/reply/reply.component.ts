import { Patient } from './../../../shared/models/patient';
import { Vaccine } from './../../../shared/models/Vaccine';
import { InjectionHistoryService } from './../../../shared/services/injection-history.service';
import { InjectionHistory } from './../../../shared/models/InjectionHistory';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  public accountList: Account[];
  public vaccineList: Vaccine[];
  public patientList: Patient[];
  public object : InjectionHistory;
  private newInjection: any;
  private createForm: FormGroup;
  private message: any;
  errorMessage = "";
  id: number;

  constructor(
    private fb: FormBuilder,
    public injectionService: InjectionHistoryService,
    public router: Router,
    public activeRoute: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      isInjected: [''],
      injectionDate: [''],
      responseContent: ['',[Validators.required]],
      registerType: [''],
      account: new FormGroup({}),
      vaccine: new FormGroup({
        name: new FormControl('')
      }),
      patient: new FormGroup({
        code: new FormControl(''),
        fullName: new FormControl(''),
        gender: new FormControl(''),
        birthday: new FormControl(''),
        parentName: new FormControl(''),
        address: new FormControl(''),
        phoneNumber: new FormControl('')
      }),
    });

    this.activeRoute.params.subscribe(data => {
      this.id = data.id;
      this.injectionService.getInjection(this.id).subscribe(data => {
        this.object = data;
        
        this.createForm.patchValue(JSON.parse(data));
      })
    });

    this.injectionService.getVaccine()
      // .pipe(map(value => JSON.parse(value)))
      .subscribe(data => {
        this.vaccineList = data;
      });


    this.injectionService.getPatient()
      // .pipe(map(value => JSON.parse(value)))
      .subscribe(data => {
        this.patientList = data;
      });
      this.injectionService.getAccount()
      // .pipe(map(value => JSON.parse(value)))
      .subscribe(data => {
        this.accountList = data;
      });
  }

  replyInjection(): void {
    if (this.createForm.valid) {
      this.newInjection = {
        isInjected: this.createForm.value.isInjected,
        injectionDate: this.createForm.value.injectionDate,
        responseContent: this.createForm.value.responseContent,
        registerType: this.createForm.value.registerType,
        account: this.createForm.value.account,
        vaccine: this.createForm.value.vaccine,
        patient: this.createForm.value.patient,
      };

      this.injectionService.replyInjection(this.id, this.newInjection).subscribe(
        data => {
          console.table(this.newInjection);
          console.log(data);
          console.log('update thành công');
        }, error => { this.errorMessage = "Vui lòng điền đầy đủ thông tin hợp lệ" }, () => {
          if (this.errorMessage.length == 0) {
            this.message = "Phản hồi thành công";
          }
        }
      );
    } 
  }
  backTo() {
    this.router.navigateByUrl("/account/injection-history");
  }

}
