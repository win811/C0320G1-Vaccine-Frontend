import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account} from '../../shared/models/Account';
import {Router} from '@angular/router';
import {AccountService} from '../../shared/services/account.service';
import {TokenStorageService} from '../../shared/services/TokenStorageService';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  submitted = false;

  private account: Account = {
    id: null,
    username: null,
    password: null,
    fullName: null,
    idCard: null,
    address: null,
    email: null,
    gender: null,
    birthDay: null,
    avatar: null,
    role: 'ROLE_USER',
    phoneNumber: null,
    confirmStatus: null,
  };

  private formSigin: FormGroup;
  message: string;

  constructor(public formBuilder: FormBuilder,
              public route: Router,
              public accountService: AccountService,
              public tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.formSigin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^.{6,}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^.{8,}$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/)]],
      idCard: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    this.submitted = true;

    this.account.username = this.formSigin.get('username').value;
    this.account.password = this.formSigin.get('password').value;
    this.account.fullName = this.formSigin.get('name').value;
    this.account.idCard = this.formSigin.get('idCard').value;
    this.account.address = this.formSigin.get('address').value;
    this.account.email = this.formSigin.get('email').value;

    console.table(this.account);
    this.accountService.createNewAccount(this.account).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl('/');
    });
  }
  get f() {
    return this.formSigin.controls; }

  cancel() {
    this.route.navigateByUrl('').then(r => {});
  }
}
