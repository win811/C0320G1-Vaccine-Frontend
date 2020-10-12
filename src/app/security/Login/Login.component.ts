import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AccountService} from '../../shared/services/account.service';
import {Login} from '../../shared/models/Login';
import {TokenStorageService} from '../../shared/services/TokenStorageService';
import {MatDialogRef} from '@angular/material';
import {JwtResponse} from '../../shared/models/dto/jwt-response';

@Component({
  selector: 'app-sigin',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {



  private login: Login = {
    username: null,
    password: null
  };

  private formLogin: FormGroup;
  isRemember: boolean;

  constructor(public formBuilder: FormBuilder,
              public router: Router,
              public accountService: AccountService,
              public tokenStorage: TokenStorageService,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{6,16}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*\\d)[0-9a-zA-Z]{6,}$')]]
    });
  }

  logIn() {
    this.login.username = this.formLogin.get('username').value;
    this.login.password = this.formLogin.get('password').value;
    this.accountService.login(this.login).subscribe(data => {
      // console.table(data);
      let test = data as JwtResponse;
      console.log(test);
      console.log(data.accountId);
      console.log("đây là chuỗi");
      console.log("2");
      console.log(2);
      this.tokenStorage.saveToken(test, this.isRemember);
      this.dialogRef.close(true);
      if ( data.authorities[0].authority == "ROLE_ADMIN" ) this.router.navigateByUrl('/admin/vaccine-storage');
    });

  }
  remember($event) {
    this.isRemember = $event.target.checked;
  }

  toCreate() {
    this.dialogRef.close();
  }
}
